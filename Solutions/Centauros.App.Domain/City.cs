namespace Centauros.App.Domain
{
    using SharpArch.Domain.DomainModel;

    public class City : Entity
    {
        public virtual string Name { get; set; }
    }
}