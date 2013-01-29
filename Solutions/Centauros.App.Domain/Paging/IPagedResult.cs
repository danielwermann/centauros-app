using System.Collections.Generic;

namespace Centauros.App.Domain.Paging
{
    public interface IPagedResult<out T>
    {
        IEnumerable<T> Items { get; }
        int Total { get; }
    }
}
