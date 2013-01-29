using Centauros.App.Web.Mvc.Controllers.ViewModels;
using System.Collections.Generic;

namespace Centauros.App.Web.Mvc.Controllers.Queries
{
    public interface ICityListQuery
    {
        IList<CityViewModel> List(int page, int size);
        IList<NeighborhoodViewModel> ListNeighborhoods(int cityId, int page, int size);
    }
}