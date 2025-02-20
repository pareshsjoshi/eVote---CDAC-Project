using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Candidates_Polls_PollId",
                table: "Candidates");

            migrationBuilder.DropIndex(
                name: "IX_Candidates_PollId",
                table: "Candidates");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Polls",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldMaxLength: 50)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "PollsPollId",
                table: "Candidates",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Votes",
                columns: table => new
                {
                    VoteId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    PollId = table.Column<int>(type: "int", nullable: false),
                    CandidateId = table.Column<int>(type: "int", nullable: false),
                    VotedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Votes", x => x.VoteId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Candidates_PollsPollId",
                table: "Candidates",
                column: "PollsPollId");

            migrationBuilder.AddForeignKey(
                name: "FK_Candidates_Polls_PollsPollId",
                table: "Candidates",
                column: "PollsPollId",
                principalTable: "Polls",
                principalColumn: "PollId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Candidates_Polls_PollsPollId",
                table: "Candidates");

            migrationBuilder.DropTable(
                name: "Votes");

            migrationBuilder.DropIndex(
                name: "IX_Candidates_PollsPollId",
                table: "Candidates");

            migrationBuilder.DropColumn(
                name: "PollsPollId",
                table: "Candidates");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "Polls",
                type: "int",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Candidates_PollId",
                table: "Candidates",
                column: "PollId");

            migrationBuilder.AddForeignKey(
                name: "FK_Candidates_Polls_PollId",
                table: "Candidates",
                column: "PollId",
                principalTable: "Polls",
                principalColumn: "PollId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
