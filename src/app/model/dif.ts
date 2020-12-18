export interface Dif {
  distributor_id ? : string | number,
  process_manager_identifier: string,
  name: string,
  establishment_date ? : string,
  enterprise_number: number,
  organization_type ? : string,
  contract_type ? : string,
  fsma_status ? : string,
  axa_distributor_status ? : string,
  lineofbusiness ? : string,
  lvf: string,
  convention: Convention[],
  employee: employee[]
}

export interface Convention {
  convention_id ? : string,
  process_manager_identifier: string,
    segment_type ? : string,
    created_by ? : string,
    created_date ? : null,
    modified_by ? : string,
    modified_date ? : string,
    valid_from ? : string,
    valid_to ? : string,
    process: process[]
}

export interface process {
  process_id ? : null,
    subprocess ? : null,
    process_manager_identifier ? : string,
    status: string,
    create_date ? : string
}

export interface employee {
  employee_id ? : string,
    process_manager_identifier: string,
    first_name: string,
    last_name: string,
    gender: string,
    nationality ? : string,
    activity_type ? : string,
    specialization_type ? : string,
    ni_number ? : string,
    behavior_type ? : string,
    certification ? : string,
    manager_id ? : string,
    hierarchy_type ? : string,
    lvf: string

}
