using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class AddCustomerInvoiceAndSupplierInvoice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "supplymentInvoices",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Serial",
                table: "SupplymentDetails",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CustomerInvoice",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerID = table.Column<string>(nullable: true),
                    EmployeeID = table.Column<string>(nullable: true),
                    StoreID = table.Column<int>(nullable: false),
                    InvoiceNumber = table.Column<int>(nullable: false),
                    InvoiceDate = table.Column<DateTime>(nullable: false),
                    Note = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerInvoice", x => x.ID);
                    table.ForeignKey(
                        name: "FK_CustomerInvoice_Customers_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Customers",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerInvoice_AspNetUsers_EmployeeID",
                        column: x => x.EmployeeID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerInvoice_Stores_StoreID",
                        column: x => x.StoreID,
                        principalTable: "Stores",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sp_SupplierInvoices",
                columns: table => new
                {
                    InvoiceNumber = table.Column<int>(nullable: false),
                    EmployeeUserName = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    ProductName = table.Column<string>(nullable: true),
                    UnitPrice = table.Column<decimal>(nullable: false),
                    StoreName = table.Column<string>(nullable: true),
                    SupplierName = table.Column<string>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: false),
                    Per = table.Column<string>(nullable: true),
                    TotalPrice = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "CustomerInvoiceDetails",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvoiceID = table.Column<int>(nullable: false),
                    ProductID = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    Quantity = table.Column<decimal>(nullable: false),
                    ExpireDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerInvoiceDetails", x => x.ID);
                    table.ForeignKey(
                        name: "FK_CustomerInvoiceDetails_CustomerInvoice_InvoiceID",
                        column: x => x.InvoiceID,
                        principalTable: "CustomerInvoice",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CustomerInvoiceDetails_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CustomerInvoice_CustomerID",
                table: "CustomerInvoice",
                column: "CustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerInvoice_EmployeeID",
                table: "CustomerInvoice",
                column: "EmployeeID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerInvoice_StoreID",
                table: "CustomerInvoice",
                column: "StoreID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerInvoiceDetails_InvoiceID",
                table: "CustomerInvoiceDetails",
                column: "InvoiceID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerInvoiceDetails_ProductID",
                table: "CustomerInvoiceDetails",
                column: "ProductID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CustomerInvoiceDetails");

            migrationBuilder.DropTable(
                name: "Sp_SupplierInvoices");

            migrationBuilder.DropTable(
                name: "CustomerInvoice");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "supplymentInvoices");

            migrationBuilder.DropColumn(
                name: "Serial",
                table: "SupplymentDetails");
        }
    }
}
