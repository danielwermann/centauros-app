using FluentNHibernate.Conventions;
using FluentNHibernate.Conventions.Instances;

namespace Centauros.App.Infrastructure.NHibernateMaps.Conventions
{
    public class ColumnNameConvention : IPropertyConvention
    {
        public void Apply(IPropertyInstance instance)
        {
            instance.Column(instance.Property.Name.ToUpper());
        }
    }
}