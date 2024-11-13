
export const formData = {
    questions: {
      name: {
        type: "text",
        label: "Name",
      },
      dateOfBirth: {
        type: "date",
        label: "Date of Birth",
      },
      mobile: {
        type: "number",
        label: "Mobile",
      },
      email: {
        type: "text",
        label: "Email",
      },
      gender: {
        type: "radio",
        label: "Select Gender",
        options: ["Male", "Female", "Other"],
      },
      occupation: {
        type: "select",
        label: "Occupation",
        options: ["Engineer", "Doctor", "Artist"],
      },
      annualIncome: {
        type: "number",
        label: "Annual Income",
      },
      address1: {
        type: "text",
        label: "Address Line 1",
      },
      address2: {
        type: "text",
        label: "Address Line 2",
      },
      zipcode: {
        type: "text",
        label: "Zip Code",
      },
      state: {
        type: "select",
        label: "State",
        options: ["State1", "State2", "State3"],
      },
      district: {
        type: "select",
        label: "District",
        options: ["District1", "District2", "District3"], 
      },
      city: {
        type: "text",
        label: "City",
      },
      member1Percentage: {
        type: "number",
        label: "Member 1 Percentage",
      },
      member2Percentage: {
        type: "number",
        label: "Member 2 Percentage",
      },
      member3Percentage: {
        type: "number",
        label: "Member 3 Percentage",
      },
    },
    sections: {
      primaryDetails: ["name", "email", "gender", "mobile"],
      otherDetails: ["annualIncome", "occupation"],
      addressDetails: ["address1", "address2", "zipcode", "state", "district", "city"],
      membersAllocation: ["member1Percentage", "member2Percentage", "member3Percentage"],
    },
  };
  