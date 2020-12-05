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

namespace RealApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        private readonly IWebHostEnvironment webHostEnvironment;

        public ProductsController(IUnitOfWork unit, IMapper mapper, IWebHostEnvironment webHostEnvironment)
        {
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

            var product = this.unitOfWork.Products.GetByID(ID);
            if (product == null)
            {
                return NotFound("The Product is not Found");
            }
            var productDTO = this.mapper.Map<ProductsDTO>(product);
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
            this.unitOfWork.Products.Add(product);
            this.unitOfWork.Complete();
            return Ok(this.mapper.Map<ProductsDTO>(product));
        }





        private string SaveAnImages(string imageProduct)
        {

            string imageString = imageProduct.Split(";base64,")[1];
            byte[] array = Convert.FromBase64String(imageString);
             string NewName = Guid.NewGuid().ToString() + ".png";
             string fullPath = Path.Combine(webHostEnvironment.WebRootPath, "images", NewName);
            using( MemoryStream memoryStream = new MemoryStream(array)){
                using(var file= new FileStream(fullPath,FileMode.Create)){
                    file.Write(array);
                }
            }
            return NewName;

        }


    }
}