namespace Centauros.App.Web.Mvc.Controllers
{
    using System.Web.Mvc;
    using Centauros.App.Web.Mvc.Controllers.Queries;
    using Centauros.App.Domain.Contracts.Tasks;
    using Centauros.App.Domain;
    using System;

    public class HomeController : BaseController
    {
        private const int DefaultPageSize = 10;

        private readonly ICityListQuery cityListQuery;
        private readonly IHealthCarePlanListQuery healthCarePlanListQuery;
        
        public HomeController(
            ICityListQuery cityListQuery,
            IHealthCarePlanListQuery healthCarePlanListQuery
            )
        {
            this.cityListQuery = cityListQuery;
            this.healthCarePlanListQuery = healthCarePlanListQuery;
        }

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult ListCities(int? page)
        {
            return Ext(this.cityListQuery.List((int)page, DefaultPageSize), true,"sucess");
        }

        public JsonResult ListNeighborhoods(int cityId, int? page)
        {
            return Ext(this.cityListQuery.ListNeighborhoods(cityId, (int)page, DefaultPageSize), true, "sucess");
        }

        public JsonResult ListHealthCarePlanes(int? page)
        {
            return Ext(this.healthCarePlanListQuery.List((int)page, DefaultPageSize), true, "sucess");
        }
    }
}
