namespace Centauros.App.Web.Mvc.Controllers.Queries
{
    using SharpArch.NHibernate;
    using Centauros.App.Web.Mvc.Controllers.ViewModels;
    using Centauros.App.Domain;
    using System.Collections.Generic;
    using System.Linq;
using Centauros.App.Domain.Contracts.Tasks;

    public class CityListQuery : NHibernateQuery, ICityListQuery
    {
        private readonly ICityTasks cityTasks;
        private readonly INeighborhoodTasks neighborhoodTasks;
        private readonly IHealthCarePlanTasks healthCarePlanTasks;
 
        public CityListQuery(
            ICityTasks cityTasks,
            INeighborhoodTasks neighborhoodTasks,
            IHealthCarePlanTasks healthCarePlanTasks)
        {
            this.cityTasks = cityTasks;
            this.neighborhoodTasks = neighborhoodTasks;
            this.healthCarePlanTasks = healthCarePlanTasks;
        }

        public IList<CityViewModel> List(int page, int size)
        {
            var query = Session.QueryOver<City>()
                .OrderBy(x => x.Name).Asc;
                //.Skip(page)
                //.Take(size);
                       
            var convertedItems = query.List<City>().Select(x => CityViewModel.Convert(x)).ToList();

            return convertedItems;
        }

        public IList<NeighborhoodViewModel> ListNeighborhoods(int cityId, int page, int size)
        {
            var query = Session.QueryOver<Neighborhood>()
                .Where(x => x.City.Id == cityId)
                .OrderBy(x => x.Name).Asc;
                //.Skip(page)
                //.Take(size);

            var convertedItems = query.List<Neighborhood>().Select(x => NeighborhoodViewModel.Convert(x)).ToList();

            return convertedItems;
        }
    }
}
