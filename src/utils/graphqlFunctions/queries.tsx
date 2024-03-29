import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query Query {
    members {
      id
      firstName
      lastName
      department
      contact
      chapel
    }
  }
`;

export const GET_PAYMENT = gql`
  query Query($paymentType: String, $paymentMonth: String) {
    payment(type: $paymentType, month: $paymentMonth) {
      id
      firstName
      lastName
      chapel
      contact
    }
  }
`;

export const GET_MEMBER = gql`
  query Query($memberId: ID) {
    member(id: $memberId) {
      id
      firstName
      lastName
      chapel
      gender
      emailAddress
      department
      residentialAddress
      contact
      location
      spouseName
      nameOfChildren
      imageURL
      group
    }
  }
`;

export const GET_MEMBER_NAME = gql`
  query Query($memberId: ID) {
    member(id: $memberId) {
      id
      firstName
      lastName
      chapel
      gender
      emailAddress
      department
      residentialAddress
      contact
      location
      group
    }
  }
`;
export const GET_CHAPEL_MEMBERS = gql`
  query Query($chapel: String) {
    chapel(chapel: $chapel) {
      firstName
      id
      lastName
      otherName
      dateOfBirth
      age
      chapel
      department
    }
  }
`;

export const GET_GROUP_MEMBERS_IMAGES = gql`
  query Query($group: String, $type: String) {
    groupImage(group: $group, type: $type) {
      id
      firstName
      lastName
      imageURL
    }
  }
`;

export const GET_PLEDGES = gql`
  query Query {
    pledges {
      id
      firstName
      lastName
      amount
      programme
      status
      pledgeDate
      redeemedDate
    }
  }
`;

export const GET_PLEDGEE = gql`
  query Query($pledgeId: ID) {
    pledge(id: $pledgeId) {
      firstName
      lastName
      amount
      programme
      status
      pledgeDate
      redeemedDate
      contact
      emailAddress
    }
  }
`;

export const GET_DEPARTMENT = gql`
  query Query($department: String) {
    department(department: $department) {
      id
      firstName
      lastName
      chapel
      contact
    }
  }
`;

export const GET_VISITORS = gql`
  query Query {
    visitors {
      id
      firstName
      lastName
      ageGroup
      contact
      date
      monthOfBirth
    }
  }
`;

export const GET_VISITOR = gql`
  query Query($visitorId: ID) {
    visitor(id: $visitorId) {
      id
      firstName
      lastName
      contact
      location
      invitedBy
      awarenessChannel
      monthOfBirth
      knowingChrist
      chapel
      group
    }
  }
`;

export const GET_GENDER_COUNT = gql`
  query Query($countGenderGroup: String) {
    countGender(group: $countGenderGroup) {
      type
      value
    }
  }
`;

export const GET_GROUP_STATS = gql`
  query Query($groupStatType: String) {
    groupStat(type: $groupStatType) {
      group
      date
      value
    }
  }
`;

export const GET_SUNDAY_STATS = gql`
  query Query($sundayStatType: String, $sundayStatVehicles: Boolean) {
    sundayStat(type: $sundayStatType, vehicles: $sundayStatVehicles) {
      sundayService
      type
      date
      value
      group
    }
  }
`;

export const USER_LOGIN = gql`
  query Query($emailAddress: String, $password: String) {
    login(emailAddress: $emailAddress, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const LOGOUT = gql`
  query Query {
    logout {
      accessToken
      refreshToken
    }
  }
`;

export const USER_DETAILS = gql`
  query User {
    user {
      id
      firstName
      lastName
      userName
      gender
      contact
      emailAddress
      homeAddress
      password
      verified
      dob
      imageURL
    }
  }
`;
