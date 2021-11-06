import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Long: any;
  Time: any;
};

export type Certifications = {
  __typename?: 'Certifications';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CertificationsInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Children = {
  __typename?: 'Children';
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  previousEducation?: Maybe<PreviousEducation>;
};

export type ChildrenInput = {
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  previousEducation?: Maybe<PreviousEducationInput>;
};

export type DailyTimings = {
  __typename?: 'DailyTimings';
  end?: Maybe<Scalars['Time']>;
  start?: Maybe<Scalars['Time']>;
};

export type DailyTimingsInput = {
  end?: Maybe<Scalars['Time']>;
  start?: Maybe<Scalars['Time']>;
};

export enum ExperienceLevel {
  Advanced = 'Advanced',
  Beginner = 'Beginner',
  Intermediate = 'Intermediate'
}

export enum InstructionMode {
  InPerson = 'InPerson',
  Remote = 'Remote'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  data: UserInput;
  id: Scalars['ID'];
};

export type PreferredInPersonOptions = {
  __typename?: 'PreferredInPersonOptions';
  maxTravelDistance?: Maybe<Scalars['Int']>;
  preferredLocation?: Maybe<Scalars['String']>;
  preferredSchedule?: Maybe<WeeklySchedule>;
};

export type PreferredInPersonOptionsInput = {
  maxTravelDistance?: Maybe<Scalars['Int']>;
  preferredLocation?: Maybe<Scalars['String']>;
  preferredSchedule?: Maybe<WeeklyScheduleInput>;
};

export type PreferredInstructionMode = {
  __typename?: 'PreferredInstructionMode';
  inPerson?: Maybe<PreferredInPersonOptions>;
  instructionMode?: Maybe<Array<Maybe<InstructionMode>>>;
  remote?: Maybe<PreferredRemoteOptions>;
};

export type PreferredInstructionModeInput = {
  inPerson?: Maybe<PreferredInPersonOptionsInput>;
  instructionMode?: Maybe<Array<Maybe<InstructionMode>>>;
  remote?: Maybe<PreferredRemoteOptionsInput>;
};

export type PreferredRemoteOptions = {
  __typename?: 'PreferredRemoteOptions';
  preferredSchedule?: Maybe<WeeklySchedule>;
};

export type PreferredRemoteOptionsInput = {
  preferredSchedule?: Maybe<WeeklyScheduleInput>;
};

export type PreviousEducation = {
  __typename?: 'PreviousEducation';
  juzMemorized?: Maybe<Scalars['Int']>;
  readingLevel?: Maybe<ExperienceLevel>;
  subject?: Maybe<SubjectType>;
  tajweedLevel?: Maybe<ExperienceLevel>;
};

export type PreviousEducationInput = {
  juzMemorized?: Maybe<Scalars['Int']>;
  readingLevel?: Maybe<ExperienceLevel>;
  subject?: Maybe<SubjectType>;
  tajweedLevel?: Maybe<ExperienceLevel>;
};

export type Query = {
  __typename?: 'Query';
  findUserByID?: Maybe<User>;
  findUserByUID?: Maybe<User>;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByUidArgs = {
  uid: Scalars['ID'];
};

export type TeacherEducation = {
  __typename?: 'TeacherEducation';
  certifications?: Maybe<Certifications>;
  institutions?: Maybe<Array<Maybe<Scalars['String']>>>;
  preferredTeachingSubject?: Maybe<Array<Maybe<SubjectType>>>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  yearsOfExperience?: Maybe<Scalars['Int']>;
};

export type TeacherEducationInput = {
  certifications?: Maybe<CertificationsInput>;
  institutions?: Maybe<Array<Maybe<Scalars['String']>>>;
  preferredTeachingSubject?: Maybe<Array<Maybe<SubjectType>>>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  yearsOfExperience?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  _ts: Scalars['Long'];
  accType?: Maybe<UserAccType>;
  children?: Maybe<Array<Maybe<Children>>>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  preferredInstructionMode?: Maybe<PreferredInstructionMode>;
  previousEducation?: Maybe<PreviousEducation>;
  teacherEducation?: Maybe<TeacherEducation>;
  uid?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  accType?: Maybe<UserAccType>;
  children?: Maybe<Array<Maybe<ChildrenInput>>>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  preferredInstructionMode?: Maybe<PreferredInstructionModeInput>;
  previousEducation?: Maybe<PreviousEducationInput>;
  teacherEducation?: Maybe<TeacherEducationInput>;
  uid?: Maybe<Scalars['ID']>;
};

export type WeeklySchedule = {
  __typename?: 'WeeklySchedule';
  Friday?: Maybe<DailyTimings>;
  Monday?: Maybe<DailyTimings>;
  Saturday?: Maybe<DailyTimings>;
  Sunday?: Maybe<DailyTimings>;
  Thursday?: Maybe<DailyTimings>;
  Tuesday?: Maybe<DailyTimings>;
  Wednesday?: Maybe<DailyTimings>;
};

export type WeeklyScheduleInput = {
  Friday?: Maybe<DailyTimingsInput>;
  Monday?: Maybe<DailyTimingsInput>;
  Saturday?: Maybe<DailyTimingsInput>;
  Sunday?: Maybe<DailyTimingsInput>;
  Thursday?: Maybe<DailyTimingsInput>;
  Tuesday?: Maybe<DailyTimingsInput>;
  Wednesday?: Maybe<DailyTimingsInput>;
};

export enum SubjectType {
  Hifz = 'Hifz',
  Qida = 'Qida',
  Reading = 'Reading'
}

export enum UserAccType {
  Parent = 'Parent',
  Student = 'Student',
  Teacher = 'Teacher'
}

export type CreateParentUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateParentUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, uid?: string | null | undefined, displayName?: string | null | undefined, email?: string | null | undefined, phoneNumber?: string | null | undefined, photoURL?: string | null | undefined, accType?: UserAccType | null | undefined, children?: Array<{ __typename?: 'Children', name?: string | null | undefined, age?: number | null | undefined, previousEducation?: { __typename?: 'PreviousEducation', subject?: SubjectType | null | undefined, juzMemorized?: number | null | undefined, readingLevel?: ExperienceLevel | null | undefined, tajweedLevel?: ExperienceLevel | null | undefined } | null | undefined } | null | undefined> | null | undefined, preferredInstructionMode?: { __typename?: 'PreferredInstructionMode', instructionMode?: Array<InstructionMode | null | undefined> | null | undefined, remote?: { __typename?: 'PreferredRemoteOptions', preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined, inPerson?: { __typename?: 'PreferredInPersonOptions', preferredLocation?: string | null | undefined, preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } };

export type CreateStudentUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateStudentUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, uid?: string | null | undefined, displayName?: string | null | undefined, email?: string | null | undefined, phoneNumber?: string | null | undefined, photoURL?: string | null | undefined, accType?: UserAccType | null | undefined, children?: Array<{ __typename?: 'Children', name?: string | null | undefined, age?: number | null | undefined, previousEducation?: { __typename?: 'PreviousEducation', subject?: SubjectType | null | undefined, juzMemorized?: number | null | undefined, readingLevel?: ExperienceLevel | null | undefined, tajweedLevel?: ExperienceLevel | null | undefined } | null | undefined } | null | undefined> | null | undefined, preferredInstructionMode?: { __typename?: 'PreferredInstructionMode', instructionMode?: Array<InstructionMode | null | undefined> | null | undefined, remote?: { __typename?: 'PreferredRemoteOptions', preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined, inPerson?: { __typename?: 'PreferredInPersonOptions', preferredLocation?: string | null | undefined, preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } };

export type CreateTeacherUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateTeacherUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, uid?: string | null | undefined, displayName?: string | null | undefined, email?: string | null | undefined, phoneNumber?: string | null | undefined, photoURL?: string | null | undefined, accType?: UserAccType | null | undefined, teacherEducation?: { __typename?: 'TeacherEducation', institutions?: Array<string | null | undefined> | null | undefined, preferredTeachingSubject?: Array<SubjectType | null | undefined> | null | undefined, yearsOfExperience?: number | null | undefined, references?: Array<string | null | undefined> | null | undefined, certifications?: { __typename?: 'Certifications', name?: string | null | undefined, description?: string | null | undefined } | null | undefined } | null | undefined, preferredInstructionMode?: { __typename?: 'PreferredInstructionMode', instructionMode?: Array<InstructionMode | null | undefined> | null | undefined, remote?: { __typename?: 'PreferredRemoteOptions', preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined, inPerson?: { __typename?: 'PreferredInPersonOptions', preferredLocation?: string | null | undefined, maxTravelDistance?: number | null | undefined, preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } };

export type FindUserQueryVariables = Exact<{
  uid: Scalars['ID'];
}>;


export type FindUserQuery = { __typename?: 'Query', findUserByUID?: { __typename?: 'User', _id: string, uid?: string | null | undefined, displayName?: string | null | undefined, email?: string | null | undefined, phoneNumber?: string | null | undefined, photoURL?: string | null | undefined, accType?: UserAccType | null | undefined, children?: Array<{ __typename?: 'Children', name?: string | null | undefined, age?: number | null | undefined, previousEducation?: { __typename?: 'PreviousEducation', subject?: SubjectType | null | undefined, juzMemorized?: number | null | undefined, readingLevel?: ExperienceLevel | null | undefined, tajweedLevel?: ExperienceLevel | null | undefined } | null | undefined } | null | undefined> | null | undefined, previousEducation?: { __typename?: 'PreviousEducation', subject?: SubjectType | null | undefined, juzMemorized?: number | null | undefined, readingLevel?: ExperienceLevel | null | undefined, tajweedLevel?: ExperienceLevel | null | undefined } | null | undefined, teacherEducation?: { __typename?: 'TeacherEducation', institutions?: Array<string | null | undefined> | null | undefined, preferredTeachingSubject?: Array<SubjectType | null | undefined> | null | undefined, references?: Array<string | null | undefined> | null | undefined, yearsOfExperience?: number | null | undefined, certifications?: { __typename?: 'Certifications', name?: string | null | undefined, description?: string | null | undefined } | null | undefined } | null | undefined, preferredInstructionMode?: { __typename?: 'PreferredInstructionMode', instructionMode?: Array<InstructionMode | null | undefined> | null | undefined, remote?: { __typename?: 'PreferredRemoteOptions', preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined, inPerson?: { __typename?: 'PreferredInPersonOptions', preferredLocation?: string | null | undefined, maxTravelDistance?: number | null | undefined, preferredSchedule?: { __typename?: 'WeeklySchedule', Monday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Tuesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Wednesday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Thursday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Friday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Saturday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined, Sunday?: { __typename?: 'DailyTimings', start?: any | null | undefined, end?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined };


export const CreateParentUserDocument = `
    mutation CreateParentUser($input: UserInput!) {
  createUser(data: $input) {
    _id
    uid
    displayName
    email
    phoneNumber
    photoURL
    accType
    children {
      name
      age
      previousEducation {
        subject
        juzMemorized
        readingLevel
        tajweedLevel
      }
    }
    preferredInstructionMode {
      instructionMode
      remote {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
      }
      inPerson {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
        preferredLocation
      }
    }
  }
}
    `;
export const useCreateParentUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateParentUserMutation, TError, CreateParentUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateParentUserMutation, TError, CreateParentUserMutationVariables, TContext>(
      'CreateParentUser',
      (variables?: CreateParentUserMutationVariables) => fetcher<CreateParentUserMutation, CreateParentUserMutationVariables>(client, CreateParentUserDocument, variables, headers)(),
      options
    );
export const CreateStudentUserDocument = `
    mutation CreateStudentUser($input: UserInput!) {
  createUser(data: $input) {
    _id
    uid
    displayName
    email
    phoneNumber
    photoURL
    accType
    children {
      name
      age
      previousEducation {
        subject
        juzMemorized
        readingLevel
        tajweedLevel
      }
    }
    preferredInstructionMode {
      instructionMode
      remote {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
      }
      inPerson {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
        preferredLocation
      }
    }
  }
}
    `;
export const useCreateStudentUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateStudentUserMutation, TError, CreateStudentUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateStudentUserMutation, TError, CreateStudentUserMutationVariables, TContext>(
      'CreateStudentUser',
      (variables?: CreateStudentUserMutationVariables) => fetcher<CreateStudentUserMutation, CreateStudentUserMutationVariables>(client, CreateStudentUserDocument, variables, headers)(),
      options
    );
export const CreateTeacherUserDocument = `
    mutation CreateTeacherUser($input: UserInput!) {
  createUser(data: $input) {
    _id
    uid
    displayName
    email
    phoneNumber
    photoURL
    accType
    teacherEducation {
      institutions
      preferredTeachingSubject
      certifications {
        name
        description
      }
      yearsOfExperience
      references
    }
    preferredInstructionMode {
      instructionMode
      remote {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
      }
      inPerson {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
        preferredLocation
        maxTravelDistance
      }
    }
  }
}
    `;
export const useCreateTeacherUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateTeacherUserMutation, TError, CreateTeacherUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateTeacherUserMutation, TError, CreateTeacherUserMutationVariables, TContext>(
      'CreateTeacherUser',
      (variables?: CreateTeacherUserMutationVariables) => fetcher<CreateTeacherUserMutation, CreateTeacherUserMutationVariables>(client, CreateTeacherUserDocument, variables, headers)(),
      options
    );
export const FindUserDocument = `
    query FindUser($uid: ID!) {
  findUserByUID(uid: $uid) {
    _id
    uid
    displayName
    email
    phoneNumber
    photoURL
    accType
    children {
      name
      age
      previousEducation {
        subject
        juzMemorized
        readingLevel
        tajweedLevel
      }
    }
    previousEducation {
      subject
      juzMemorized
      readingLevel
      tajweedLevel
    }
    teacherEducation {
      institutions
      preferredTeachingSubject
      certifications {
        name
        description
      }
      references
      yearsOfExperience
    }
    preferredInstructionMode {
      instructionMode
      remote {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
      }
      inPerson {
        preferredSchedule {
          Monday {
            start
            end
          }
          Tuesday {
            start
            end
          }
          Wednesday {
            start
            end
          }
          Thursday {
            start
            end
          }
          Friday {
            start
            end
          }
          Saturday {
            start
            end
          }
          Sunday {
            start
            end
          }
        }
        preferredLocation
        maxTravelDistance
      }
    }
  }
}
    `;
export const useFindUserQuery = <
      TData = FindUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: FindUserQueryVariables,
      options?: UseQueryOptions<FindUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<FindUserQuery, TError, TData>(
      ['FindUser', variables],
      fetcher<FindUserQuery, FindUserQueryVariables>(client, FindUserDocument, variables, headers),
      options
    );