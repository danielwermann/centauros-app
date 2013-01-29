using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Centauros.App.Domain;

namespace Centauros.App.Web.Mvc.Controllers.ViewModels
{
    public class NeighborhoodViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CityName { get; set; }
        public int CityId { get; set; }

        public static NeighborhoodViewModel Convert(Neighborhood entity)
        {
            var viewModel = new NeighborhoodViewModel();

            if (null == entity)
            {
                return viewModel;
            }

            viewModel.Id = entity.Id;
            viewModel.Name = entity.Name;
            viewModel.CityId = entity.City.Id;
            viewModel.CityName = entity.City.Name;

            return viewModel;
        }
    }
}