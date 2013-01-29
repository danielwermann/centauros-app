namespace Centauros.App.Web.Mvc.Controllers.Queries
{
    using SharpArch.NHibernate;
    using Centauros.App.Web.Mvc.Controllers.ViewModels;
    using Centauros.App.Domain;
    using System.Collections.Generic;
    using System.Linq;

    public class HealthCarePlanListQuery : NHibernateQuery, IHealthCarePlanListQuery
    {
        public IList<HealthCarePlanViewModel> List(int page, int size)
        {
            var query = Session.QueryOver<HealthCarePlan>()
                .OrderBy(x => x.Name).Asc;
                //.Skip(page)
                //.Take(size);

            var convertedItems = query.List<HealthCarePlan>().Select(x => HealthCarePlanViewModel.Convert(x)).ToList();

            return convertedItems;
        }
    }
}
