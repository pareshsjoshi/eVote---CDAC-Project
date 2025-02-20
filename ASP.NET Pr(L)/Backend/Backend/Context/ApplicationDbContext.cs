using Microsoft.EntityFrameworkCore;
using Backend.Entity;
using Microsoft.AspNetCore.Routing.Matching;

namespace Backend.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Polls> Polls { get; set; }
        public DbSet<Logger> Loggers { get; set; }
        public DbSet<Vote> Votes { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(u => u.Role)
                .HasConversion<string>();

            modelBuilder.Entity<User>()
                .Property(u => u.Gender)
                .HasConversion<string>();

            modelBuilder.Entity<Polls>()
                .Property(p => p.Status)
                .HasConversion<string>();
        }
    }
}
