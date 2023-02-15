// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

export interface User {
  id: number
  name: string
  bio: string
}
/*
  interface EditUser {
    id: number
    name?: string
    bio?: string
  }

  Instead:
*/

type Partial<Type> = {
  [Property in keyof Type]?: Type[Property]
} & { id: number } // to keep id required

type EditUser = Partial<User>

/*
  // works
  const user: EditUser = {
    id: 1,
    name: "Lara",
    bio: "Croft"
  }

  // does not work
  const anotherUser: EditUser = {
    name: "Lara",
    bio: "Croft"
  }
*/

// back to required (just an example):

type AllRequired<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

type RequiredUser = AllRequired<EditUser>

// or just using the utility type from typescript:

type UtilityRequiredUser = Required<EditUser>

// --------------------------------------------------------

interface AppConfig {
  username: string
  theme: string
}

/*
  interface AppPermissions {
    changeUsername: boolean
    changeLayout: boolean
  }


  // There is a relationship between AppConfig and AppPermissions.
  // When we add a new prop to AppConfig, we should also add a corresponding boolean value to AppPermissions.

  // It is better to have the type system manage this relationship instead of relying on the developer, so

  Instead:
*/

type AppPermissions = {
  [Property in keyof AppConfig as `change${Capitalize<Property>}`]: boolean
}

/* 
  // works
  const permission: AppPermissions = {
    changeUsername: false,
    changeTheme: true
  }

  // does not work
  const AnotherPermission: AppPermissions = {
    changeUsername: false,
    changeLayout: true
  }

  // does not work
  const OtherPermission: AppPermissions = {
    changeUsername: false
  }
*/
