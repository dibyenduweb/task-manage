import useAuth from "../../../Hooks/useAuth";

const UserDashboard = () => {
    const {user} = useAuth();
    // if (!user) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
        <div>
            <h1 className="text-4xl text-center text-red-500 font-bold">Dashboard</h1>
            <h2 className="text-2xl font-semibold"><span className="text-teal-500">Welcome</span> @ {user?.displayName}</h2>
        </div>
        </>
    );
};

export default UserDashboard;
