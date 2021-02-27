using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RealApplication.Tests
{
    public class CustomeValidationObject 
    {
        //public void Validate(ActionContext actionContext, ValidationStateDictionary validationState, string prefix, object model)
        //{

//}

       public static void SetErrors (ModelStateDictionary keys , object model)
        {
            var context = new System.ComponentModel.DataAnnotations.ValidationContext(model,null, null);
            var results = new List<ValidationResult>();
            var isModelStateValid = Validator.TryValidateObject(model, context, results, false);
            if (!isModelStateValid)
            {

                foreach (var item in results)
                {
                    keys.AddModelError(item.MemberNames.ToString(), item.ErrorMessage);
                
                }

            }
        }
    }
}
