using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ImagePath : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bytes",
                table: "PostContent");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "PostContent",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Path",
                table: "PostContent",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "PostContent");

            migrationBuilder.DropColumn(
                name: "Path",
                table: "PostContent");

            migrationBuilder.AddColumn<byte[]>(
                name: "Bytes",
                table: "PostContent",
                type: "bytea",
                nullable: true);
        }
    }
}
