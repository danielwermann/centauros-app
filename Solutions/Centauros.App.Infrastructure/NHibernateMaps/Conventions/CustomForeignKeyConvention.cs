namespace Centauros.App.Infrastructure.NHibernateMaps.Conventions
{
    #region Using Directives

    using System;

    using FluentNHibernate;
    using FluentNHibernate.Conventions;

    #endregion

    public class CustomForeignKeyConvention : ForeignKeyConvention 
    {
        protected override string GetKeyName(Member property, Type type)
        {
            if (property == null)
            {
                return "ID" + type.Name.ToUpper();
            }

            return "ID" + property.Name.ToUpper();
        }
    }
}