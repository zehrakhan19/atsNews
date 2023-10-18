const useStaff = ({navigation}: any) => {
  const StaffData = [
    {
      title: 'Om Prakash Mahato',
      address: 'Kukatpally',
      designation: 'Jr developer',
      employeeType: 'Reporter',
    },
    {
      title: 'Baddam Rachana',
      address: 'Madhapur',
      designation: 'Designer',
      employeeType: 'Editor',
    },
  ];
  const handleNavigateToAddEmployee = () => {
    navigation.navigate('add-employee');
  };
  return {
    navigation,
    StaffData,
    handleNavigateToAddEmployee,
  };
};

export default useStaff;
