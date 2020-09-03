import React from "react";

import UserList from "./UserList";

export default {
  component: UserList,
  title: "components/UserList",
};

/* export const simple = () => (
  <UserList
    users={[
      {
        id: '1',
        name: 'Dominic Nyugen',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
      },
      {
        id: '1',
        name: 'Tom Coleman',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
      },
    ]}
  />
); */

// to copy for pull request
const Template = (args) => <UserList {...args} />;

export const simple = Template.bind({});
simple.args = {
  users: [
    {
      id: "1",
      name: "Dominic Nyugen",
      avatarUrl: "https://avatars2.githubusercontent.com/u/263385",
    },
    {
      id: "1",
      name: "Tom Coleman",
      avatarUrl: "https://avatars2.githubusercontent.com/u/132554",
    },
  ],
};
