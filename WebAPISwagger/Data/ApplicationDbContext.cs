using Microsoft.EntityFrameworkCore;
using WebAPISwagger.Models.Entities;

namespace WebAPISwagger.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
