using Microsoft.AspNetCore.Identity;

namespace Company_Project.Models
{
    public class ApplicationUser:IdentityUser
    {
        public string? Salary { get; set; }
    }
}
