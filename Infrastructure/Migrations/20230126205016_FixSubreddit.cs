using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class FixSubreddit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Community_CommunityId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_CommunityId",
                table: "Posts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Community",
                table: "Community");

            migrationBuilder.DropColumn(
                name: "CommunityId",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Community");

            migrationBuilder.RenameTable(
                name: "Community",
                newName: "Subreddits");

            migrationBuilder.RenameColumn(
                name: "CommunityType",
                table: "Posts",
                newName: "SubredditId");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Subreddits",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Subreddits",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Subreddits",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subreddits",
                table: "Subreddits",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_SubredditId",
                table: "Posts",
                column: "SubredditId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Subreddits_SubredditId",
                table: "Posts",
                column: "SubredditId",
                principalTable: "Subreddits",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Subreddits_SubredditId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_SubredditId",
                table: "Posts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subreddits",
                table: "Subreddits");

            migrationBuilder.RenameTable(
                name: "Subreddits",
                newName: "Community");

            migrationBuilder.RenameColumn(
                name: "SubredditId",
                table: "Posts",
                newName: "CommunityType");

            migrationBuilder.AddColumn<int>(
                name: "CommunityId",
                table: "Posts",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Community",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Community",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Community",
                type: "timestamp with time zone",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Community",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Community",
                table: "Community",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_CommunityId",
                table: "Posts",
                column: "CommunityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Community_CommunityId",
                table: "Posts",
                column: "CommunityId",
                principalTable: "Community",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
