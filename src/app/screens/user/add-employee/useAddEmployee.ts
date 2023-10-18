import {useState} from 'react';
const data = [
  {
    empType: 'Reporter',
  },
  {
    empType: 'Editor',
  },
];

const initialSate = {
  emptype: '',
  name: '',
  email: '',
  mobileNumber: '',
  hireDate: new Date(),
  jobTitle: '',
  searchPincode: '',
  workArea: '',
};
const useAddEmployee = ({navigation}: any) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [employeeType, setEmployeeType] = useState({
    name: `Select your employee type`,
    bottomSheet: false,
  });
  const [employee, setEmployee] = useState(initialSate);
  const [address, setAddress] = useState({});

  var query = require('india-pincode-search');

  const handleInputChange = (item: string, value: string) => {
    setEmployee(prev => ({
      ...prev,
      [item]: value,
    }));
  };
  const handlePincodeSearch = (pincode: any, value: any) => {
    setEmployee(prev => ({
      ...prev,
      searchPincode: value,
    }));
    setAddress(query.search(value));
    console.log(query.search(value));
  };
  const handleWorkAreaSearch = (workArea: any, value: any) => {
    setEmployee(prev => ({
      ...prev,
      workArea: value,
    }));

    console.log(query.search(value));
  };
  return {
    navigation,
    employeeType,
    setEmployeeType,
    data,
    date,
    setDate,
    handleInputChange,
    employee,
    address,
    handlePincodeSearch,
    handleWorkAreaSearch,
  };
};

export default useAddEmployee;
