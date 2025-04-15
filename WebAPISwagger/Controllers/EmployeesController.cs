using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPISwagger.Data;
using WebAPISwagger.Models;
using WebAPISwagger.Models.Entities;

namespace WebAPISwagger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public EmployeesController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            var allEmployees = dbContext.Employees.ToList();
            return Ok(allEmployees);
        }

        [HttpGet]
        [Route("{id=guid}")]
        public IActionResult GetEmployeeById(Guid id)
        {
            var emp = dbContext.Employees.Find(id);

            if (emp == null) { 
                return NotFound();
            }

            return Ok(emp);
        }

        [HttpPut]
        [Route("{id=guid}")]
        public IActionResult UpdateEmployee(Guid id, UpdateEmployeeDto emp) 
        {
            var existingEmp = dbContext.Employees.Find(id);

            if (existingEmp == null) 
            {
                return NotFound();
            }

            existingEmp.Name = emp.Name;
            existingEmp.Email = emp.Email;
            existingEmp.Phone = emp.Phone;
            existingEmp.Salary = emp.Salary;

            dbContext.SaveChanges();

            return Ok(existingEmp);
        }

        [HttpPost]
        public IActionResult AddEmployee(AddEmployeeDto emp)
        {
            var empEntity = new Employee()
            {
                Name = emp.Name,
                Email = emp.Email,
                Phone = emp.Phone,
                Salary = emp.Salary
            };

            dbContext.Employees.Add(empEntity);
            dbContext.SaveChanges();

            return Ok(empEntity);
        }

        [HttpDelete]
        [Route("{id=guid}")]
        public IActionResult DeleteEmployee(Guid id) 
        {
            var emp = dbContext.Employees.Find(id);

            if (emp == null)
            {
                return NotFound();
            }

            dbContext.Employees.Remove(emp);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
