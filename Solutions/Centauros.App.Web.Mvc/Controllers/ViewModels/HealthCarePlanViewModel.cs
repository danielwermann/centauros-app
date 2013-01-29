using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Centauros.App.Domain;

namespace Centauros.App.Web.Mvc.Controllers.ViewModels
{
    public class HealthCarePlanViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public static HealthCarePlanViewModel Convert(HealthCarePlan entity)
        {
            var viewModel = new HealthCarePlanViewModel();
            
            if (null == entity)
            {
                return viewModel;
            }

            viewModel.Id = entity.Id;
            viewModel.Name = entity.Name;

            return viewModel;
        }
    }
}