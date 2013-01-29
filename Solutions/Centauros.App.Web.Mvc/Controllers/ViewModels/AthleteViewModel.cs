using Centauros.App.Domain;
using System;
using System.Text;

namespace Centauros.App.Web.Mvc.Controllers.ViewModels
{
    public class AthleteViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public char Gender { get; set; }
        public float Weight { get; set; }
        public float Height { get; set; }
        public DateTime FirstTrainingDate { get; set; }
        public int Position { get; set; }
        public int Experience { get; set; }
        public string Telephone { get; set; }
        public string Cellphone { get; set; }
        public string Email { get; set; }
        public string UrgencyContactName { get; set; }
        public string UrgencyContactTelephone { get; set; }
        public string Address { get; set; }
        public string AddressComplement { get; set; }
        public int CityId { get; set; }
        public int NeighborhoodId { get; set; }
        public int HealthCarePlanId { get; set; }
        public string BloodType { get; set; }
        public string InjuriesHistory { get; set; }
        public string AllergiesDiseases { get; set; }
        public string Cpf { get; set; }
        public string CpfPath { get; set; }
        public string Rg { get; set; }
        public string RgPath { get; set; }
        public string FgrCardNumber { get; set; }
        public string FgrCardPath { get; set; }
        public string IrbLawsPath { get; set; }
        public string IrbReadyPath { get; set; }
        public string MedicalAttestPath { get; set; }
        public string HealthCarePlanCardPath { get; set; }
        public string HealthCarePlanCardNumber { get; set; }
        public DateTime CreatedOn { get; set; }

        public static AthleteViewModel Convert(Athlete entity)
        {
            var viewModel = new AthleteViewModel();
            
            if (null == entity)
            {
                return viewModel;
            }

            viewModel.Id = entity.Id;
            viewModel.Name = entity.Name;
            viewModel.BirthDate = entity.BirthDate;
            viewModel.Gender = entity.Gender;
            viewModel.Weight = entity.Weight;
            viewModel.Height = entity.Height;
            viewModel.FirstTrainingDate = entity.FirstTrainingDate;
            viewModel.Position = entity.Position;
            viewModel.Experience = entity.Experience;
            viewModel.Telephone = entity.Telephone;
            viewModel.Cellphone = entity.Cellphone;
            viewModel.Email = entity.Email;
            viewModel.UrgencyContactName = entity.UrgencyContactName;
            viewModel.UrgencyContactTelephone = entity.UrgencyContactTelephone;
            viewModel.Address = entity.Address;
            viewModel.AddressComplement = entity.AddressComplement;
            viewModel.CityId = entity.City.Id;
            viewModel.NeighborhoodId = entity.Neighborhood.Id;
            viewModel.HealthCarePlanId = entity.HealthCarePlan.Id;
            viewModel.BloodType = entity.BloodType;
            viewModel.InjuriesHistory = entity.InjuriesHistory;
            viewModel.AllergiesDiseases = entity.AllergiesDiseases;
            viewModel.Cpf = entity.Cpf;
            viewModel.CpfPath = entity.CpfPath;
            viewModel.Rg = entity.Rg;
            viewModel.RgPath = entity.RgPath;
            viewModel.FgrCardNumber = entity.FgrCardNumber;
            viewModel.FgrCardPath = entity.FgrCardPath;
            viewModel.IrbLawsPath = entity.IrbLawsPath;
            viewModel.IrbReadyPath = entity.IrbReadyPath;
            viewModel.MedicalAttestPath = entity.MedicalAttestPath;
            viewModel.HealthCarePlanCardPath = entity.HealthCarePlanCardPath;
            viewModel.HealthCarePlanCardNumber = entity.HealthCarePlanCardNumber;
            viewModel.CreatedOn = entity.CreatedOn;

            return viewModel;
        }

        public bool Validate(AthleteViewModel viewModel, out string message)
        {
            var hasCityId = null != viewModel.CityId && 0 != viewModel.CityId;
            var hasNeighborhoodId = null != viewModel.NeighborhoodId && 0 != viewModel.NeighborhoodId;
            var hasHealthCarePlanId = null != viewModel.HealthCarePlanId && 0 != viewModel.HealthCarePlanId;

            var messages = new StringBuilder();
            var delimiter = "<br/>";

            if (!hasCityId)
            {
                messages.AppendLine(string.Format("{0}{1}","O campo Cidade é obrigatório.", delimiter ));
            }

            if (!hasNeighborhoodId)
            {
                messages.AppendLine(string.Format("{0}{1}", "O campo Bairro é obrigatório.", delimiter));
            }

            if (!hasHealthCarePlanId)
            {
                messages.AppendLine(string.Format("{0}{1}", "O campo Plano de Saúde é obrigatório.", delimiter));
            }

            message = messages.ToString();

            if (!hasCityId || !hasHealthCarePlanId || !hasNeighborhoodId)
            {
                return false;
            }            
            return true;
        }
    }
}