import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    localStorage.removeItem("AUTH_TOKEN");
    navigate("/admin-login");
  };

  return (
    <>
      <div className="dashboard-section">
        <h2>Welcome to the Dashboard Page</h2>

        <button onClick={() => handleBtnClick()}>Logout</button>
      </div>
    </>
  );
};

export default Dashboard;
