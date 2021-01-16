using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RealApplication.DTO;
using RealApplication.DTO.ProductDTOS;
using RealApplication.Models;
using RealApplication.Repository.UnitOfWork;
using System.Reflection;
using System.Drawing;
using System.IO;
using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly IHttpContextAccessor httpContextAccessor;

        public ProductsController(IUnitOfWork unit, IMapper mapper, IWebHostEnvironment webHostEnvironment, IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
            this.mapper = mapper;
            this.unitOfWork = unit;

        }
        [HttpGet]
        public IActionResult Get([FromQuery] int pageSize, [FromQuery] int start, [FromQuery] string search)
        {
            search = search == null ? "" : search.ToLower();
            var model = new DataTableDTO<ProductsDTO>()
            {
                Data = mapper.Map<IEnumerable<ProductsDTO>>(unitOfWork.Products.GetEntityDataTable(start, pageSize, async => async.ProductName.ToLower().Contains(search) && async.IsDeleted == false, async => async.ProductName)),
                TotalCount = unitOfWork.Products.GetCount(a => a.IsDeleted == false)
            };
            return Ok(model);
        }
        [HttpGet(template: "/api/[controller]/number")]
        public async Task<IActionResult> GetProductNumber()
        {
            return Ok(await this.unitOfWork.Products.GetProductNumber());
        }

        [HttpGet(template: "{ID}")]
        public IActionResult GetProductByID(string ID)
        {
            if (ID == null)
            {
                return BadRequest("The Product ID is not valid");
            }

            var product = this.unitOfWork.Products.GetProductWithMesasurementById(ID);
            if (product == null)
            {
                return NotFound("The Product is not Found");
            }
            var productDTO = this.mapper.Map<ProductsDTO>(product);
            product.ProductMeasurements.Each(a=> productDTO.Measurements.Add(new ProductMeasureDTO(){
                BarCode= a.BarCode,
                MeasurementName = a.Measurement.Name,
                Value = a.Value,
                ID = a.MeasurementID,
                IsKnown = a.Measurement.IsKnown,
                IsMain =a.Measurement.IsMain
            }));
            ConvertImageToImageURL(productDTO);
            return Ok(productDTO);

        }


        [HttpPost]
        public async Task<IActionResult> Post(ProductsDTO productsDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest("The Product is not valid");

            var product = this.mapper.Map<Product>(productsDTO);
            product.ProductNumber = await this.unitOfWork.Products.GetProductNumber();
            if (productsDTO.ProductImage != null)
            {
                product.ImageURL = SaveAnImages(productsDTO.ProductImage);
            }
            //fill the details
            productsDTO.Measurements.Each(a=> product.ProductMeasurements.Add(new ProductMeasurements(){
               Value = a.Value,
               MeasurementID = a.ID,
               BarCode = a.BarCode
            }));
            this.unitOfWork.Products.Add(product);
            this.unitOfWork.Complete();
            return Ok(this.mapper.Map<ProductsDTO>(product));
        }
        [HttpPut(template:"{ID}")]
        public async  Task<ActionResult> Put(string ID,ProductsDTO productsDTO) {


            if(!ModelState.IsValid){
               return BadRequest("The Product Data Is Not valid");
                
            }
            
            if(productsDTO.ProductImage != null)
                 productsDTO.ProductImage=  this.SaveAnImages(productsDTO.ProductImage);
            else
                productsDTO.ProductImage = await this.unitOfWork.Products.GetOldImage(ID);
            
           var product = this.mapper.Map<Product>(productsDTO);
             product.ID = ID;

             this.unitOfWork.Products.Edit(product);
             this.unitOfWork.Complete();
             return NoContent();
        }
        [HttpGet("/api/[controller]/validateName/{Name}")]
        public IActionResult ValidateProductName(string Name,[FromQuery]string ID){
           return Ok(this.unitOfWork.Products.ValidateName(ID,Name));
        }
         [HttpGet("/api/[controller]/validateBarcode/{Name}")]
        public IActionResult ValidateProductBarCode(string barCode ,[FromQuery] string ID){
           return Ok(this.unitOfWork.Products.ValidateBarCode(barCode,ID));
        }
       

        private string SaveAnImages(string imageProduct)
        {

            string imageString = imageProduct.Split(";base64,")[1];
            byte[] array = Convert.FromBase64String(imageString);
            string NewName = Guid.NewGuid().ToString() + ".png";
            string fullPath = Path.Combine(webHostEnvironment.WebRootPath, "images", NewName);
            using (MemoryStream memoryStream = new MemoryStream(array))
            {
                using (var file = new FileStream(fullPath, FileMode.Create))
                {
                    file.Write(array);
                }
            }
            return NewName;

        }

        private void ConvertImageToImageURL(ProductsDTO productsDTO)
        {

            productsDTO.ProductImage = productsDTO.ProductImage == null ? $"{HttpContext.Request.Scheme}://{httpContextAccessor.HttpContext.Request.Host.Value}/images/{"default.png"}":$"{HttpContext.Request.Scheme}://{httpContextAccessor.HttpContext.Request.Host.Value}/images/{productsDTO.ProductImage}";

        }


    }
}