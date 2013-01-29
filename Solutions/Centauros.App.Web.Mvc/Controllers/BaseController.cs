using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Microsoft.Practices.ServiceLocation;
using Centauros.App.Domain.Paging;


namespace Centauros.App.Web.Mvc.Controllers
{
    public abstract class BaseController : Controller
    {
        protected BaseController(){}
        
        protected JsonResult Ext(object data, bool success = true, string message = "success")
        {
            var json = new { data, success, message };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        protected JsonResult Ext(bool success = true, string message = "success")
        {
            var json = new { success, message };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        protected JsonResult Success(string message = "")
        {
            var json = new { success = true, message };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        protected JsonResult Success(object data)
        {
            var json = new { success = true, data };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        protected JsonResult Error(params string[] errors)
        {
            var json = new { success = false, message = errors };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        protected JsonResult Error(IEnumerable<string> errors)
        {
            return Error(errors.ToArray());
        }

        protected JsonResult Ext<T>(IPagedResult<T> pagedResult, bool success = true, string message = "success")
        {
            var json = new { data = pagedResult.Items, total = pagedResult.Total, success, message };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        protected JsonResult Ext<T>(T data, bool success = true, string message = "success")
        {
            var json = new { data, success, message };
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        protected JsonResult Ext<T>(T data, bool success = true, string message = "success", string error = "")
        {
            var json = new { data, success, message, error };
            return Json(json, JsonRequestBehavior.AllowGet);
        }
    }
}
