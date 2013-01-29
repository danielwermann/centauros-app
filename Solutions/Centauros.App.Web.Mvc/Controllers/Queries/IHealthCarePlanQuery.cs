using Centauros.App.Web.Mvc.Controllers.ViewModels;
using System.Collections.Generic;

namespace Centauros.App.Web.Mvc.Controllers.Queries
{
    public interface IHealthCarePlanListQuery
    {
        IList<HealthCarePlanViewModel> List(int page, int size);
    }
}