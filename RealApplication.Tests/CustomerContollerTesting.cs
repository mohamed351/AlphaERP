using System;
using Xunit;
using RealApplication;
using RealApplication.Controllers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RealApplication.Repository.UnitOfWork;
using RealApplication.Mapper;
using AutoMapper;
using RealApplication.DTO.AddressDTOS;
using RealApplication.Repository.interfaces;
using Moq;
using RealApplication.DTO.CustomersDTOS;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RealApplication.Tests
{
    public class CustomerContollerTesting
    {
        [Fact]
        public void Customer_Add_success()
        {
            var model = new DTO.CustomersDTOS.CustomerCreateDTO()
            {
                ID = "12",
                CustomerName = "Mohamed"
            };
            Mock<ICustomerRepository> repositoryMock = new Mock<ICustomerRepository>();
            var moqIunitOfWork = new Moq.Mock<IUnitOfWork>();
            moqIunitOfWork.Setup(a => a.Customers).Returns(repositoryMock.Object);
               
            var myProfile = new CustomerProfiler();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            IMapper mapper = new AutoMapper.Mapper(configuration);

            var controller = new CustomersController(moqIunitOfWork.Object, mapper);
            CustomeValidationObject.SetErrors(controller.ModelState, model);

           ObjectResult x = (ObjectResult)controller.Post(model);

            Assert.True(x.StatusCode == 200);
         

        }

        [Fact]
        public void Customer_Add_Faild()
        {
            var model = new DTO.CustomersDTOS.CustomerCreateDTO()
            {
                ID = "12",
                CustomerName = ""
            };
            Mock<ICustomerRepository> repositoryMock = new Mock<ICustomerRepository>();
            var moqIunitOfWork = new Moq.Mock<IUnitOfWork>();
            moqIunitOfWork.Setup(a => a.Customers).Returns(repositoryMock.Object);

            var myProfile = new CustomerProfiler();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(myProfile));
            IMapper mapper = new AutoMapper.Mapper(configuration);

            var controller = new CustomersController(moqIunitOfWork.Object, mapper);
            CustomeValidationObject.SetErrors(controller.ModelState, model);

            ObjectResult x = (ObjectResult)controller.Post(model);

            Assert.True(x.StatusCode == 400);


        }
    }
}
