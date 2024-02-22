import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";

const AdminMainPage = () => {
  const productChartRef = useRef(null);
  const revenueChartRef = useRef(null);

  useEffect(() => {
    const productChartCanvas = productChartRef.current;
    const revenueChartCanvas = revenueChartRef.current;

    const productChartData = {
      labels: ["Clothes", "Bags", "Tops", "Glasses ", "Shoes"],
      datasets: [
        {
          label: "Product Sales",
          data: [50, 30, 20, 45, 60],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const revenueChartData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          data: [1000, 1500, 1200, 1800, 2000, 2500],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 1,
        },
      ],
    };

    const productChartInstance = new Chart(productChartCanvas, {
      type: "bar",
      data: productChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    const revenueChartInstance = new Chart(revenueChartCanvas, {
      type: "line",
      data: revenueChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              callback: function (value) {
                return "AU$" + value;
              },
            },
          },
        },
      },
    });

    // Return cleanup function to destroy charts when component unmounts
    return () => {
      productChartInstance.destroy();
      revenueChartInstance.destroy();
    };
  }, []);

  return (
    <>
      <div>
       

        <AdminHeader />
    
        <div className="container-fluid">
          <h1 style={{fontWeight:"600",letterSpacing:"1.2px"}}>Admin Dashboard</h1>
          <div
            className="row text-light"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <AdminSideHeader />
            <div className="col-lg-5 d-flex justify-content-center p-4">
              {/* Canvas for Product Chart */}
              <canvas ref={productChartRef}></canvas>
            </div>
            <div className="col-lg-4">
              {/* Canvas for Revenue Chart */}
              <canvas ref={revenueChartRef}></canvas>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMainPage;
