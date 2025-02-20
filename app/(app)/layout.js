import Header from "./_components/Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;
