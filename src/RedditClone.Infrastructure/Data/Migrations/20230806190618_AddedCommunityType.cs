using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RedditClone.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddedCommunityType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CommunityType",
                table: "Communities",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CommunityType",
                table: "Communities");
        }
    }
}
