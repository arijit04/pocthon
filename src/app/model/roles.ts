export enum role {
    admin = 1,
    developer = 2,
    tester = 3,
    sa = 4,
    ba = 5
}

export const ROLES = {
    admin: role.admin,
    developer: role.developer,
    tester: role.tester,
    sa: role.sa,
    ba: role.ba
};

export const ROLESLIST = [
    {
        key: role.admin,
        value: 'Admin'
    },
    {
        key: role.developer,
        value: 'Developer'
    },
    {
        key: role.tester,
        value: 'Tester'
    },
    {
        key: role.sa,
        value: 'System Analyst'
    },
    {
        key: role.ba,
        value: 'Business Analyst'
    }
];
