namespace Centauros.App.Web.Mvc.Controllers
{
    using System.Web.Mvc;
    using Centauros.App.Web.Mvc.Controllers.Queries;
    using Centauros.App.Domain.Contracts.Tasks;
    using Centauros.App.Domain;
    using System;
    using SharpArch.NHibernate.Web.Mvc;
    using Centauros.App.Web.Mvc.Controllers.ViewModels;

    public class AthleteController : BaseController
    {
        private readonly IAthleteTasks athleteTasks;
        private readonly ICityTasks cityTasks;
        private readonly IHealthCarePlanTasks healthCarePlanTasks;
        private readonly INeighborhoodTasks neighborhoodTasks;

        public AthleteController(
            IAthleteTasks athleteTasks,
            ICityTasks cityTasks,
            IHealthCarePlanTasks healthCarePlanTasks,
            INeighborhoodTasks neighborhoodTasks
            )
        {
            this.athleteTasks = athleteTasks;
            this.cityTasks = cityTasks;
            this.healthCarePlanTasks = healthCarePlanTasks;
            this.neighborhoodTasks = neighborhoodTasks;
        }

        public ActionResult Index()
        {
            return View();
        }

        [Transaction]
        public JsonResult Create(AthleteViewModel viewModel)
        {
            var message = "";
            var entity = FillEntity(viewModel, out message);

            if (athleteTasks.ExistsCpf(entity.Cpf))
            {
                return Ext(viewModel, false, "Já existe um atleta cadastrado com este CPF");
            }

            athleteTasks.CreateOrUpdate(entity);

            return Ext(viewModel, true, "sucess");
        }

        private Athlete FillEntity(AthleteViewModel viewModel, out string message)
        {
            var entity = new Athlete();

            if (viewModel.Validate(viewModel, out message))
            {
                var city = cityTasks.Get(viewModel.CityId);
                var healthCarePlan = healthCarePlanTasks.Get(viewModel.HealthCarePlanId);
                var neighborhood = neighborhoodTasks.Get(viewModel.NeighborhoodId);

                entity.City = city;
                entity.Neighborhood = neighborhood;
                entity.HealthCarePlan = healthCarePlan;
                entity.Address = viewModel.Address.ToUpper();
                entity.AddressComplement = string.IsNullOrEmpty(viewModel.AddressComplement) ? "" : viewModel.AddressComplement.ToUpper();
                entity.AllergiesDiseases = string.IsNullOrEmpty(viewModel.AllergiesDiseases) ? "" : viewModel.AllergiesDiseases.ToUpper();
                entity.BirthDate = viewModel.BirthDate;
                entity.BloodType = viewModel.BloodType;
                entity.Cellphone = viewModel.Cellphone;
                entity.Cpf = viewModel.Cpf;
                entity.CpfPath = viewModel.CpfPath;
                entity.Email = viewModel.Email;
                entity.Experience = viewModel.Experience;
                entity.FgrCardNumber = viewModel.FgrCardNumber;
                entity.FgrCardPath = viewModel.FgrCardPath;
                entity.FirstTrainingDate = viewModel.FirstTrainingDate;
                entity.Gender = viewModel.Gender;
                entity.HealthCarePlanCardNumber = viewModel.HealthCarePlanCardNumber;
                entity.HealthCarePlanCardPath = viewModel.HealthCarePlanCardPath;
                entity.Height = viewModel.Height;
                entity.InjuriesHistory = string.IsNullOrEmpty(viewModel.InjuriesHistory) ? "" : viewModel.InjuriesHistory.ToUpper();
                entity.IrbLawsPath = viewModel.IrbLawsPath;
                entity.IrbReadyPath = viewModel.IrbReadyPath;
                entity.MedicalAttestPath = viewModel.MedicalAttestPath;
                entity.Name = viewModel.Name.ToUpper();
                entity.Position = viewModel.Position;
                entity.Rg = viewModel.Rg;
                entity.RgPath = viewModel.RgPath;
                entity.Telephone = viewModel.Telephone;
                entity.UrgencyContactName = viewModel.UrgencyContactName.ToUpper();
                entity.UrgencyContactTelephone = viewModel.UrgencyContactTelephone;
                entity.Weight = viewModel.Weight;   
            }

            return entity;
        }
    }
}
