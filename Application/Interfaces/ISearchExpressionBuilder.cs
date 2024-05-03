using System.Linq.Expressions;

namespace Application.Interfaces
{
    public interface ISearchExpressionBuilder
    {
        Expression<Func<T, bool>> BuildSearchExpression<T>(string searchText) where T : class;
    }
}