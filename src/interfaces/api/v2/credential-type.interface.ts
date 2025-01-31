import { IApiResource } from "../resource.interface";
import { ISchemaLabel } from "../v4/credential.interface";
import { IIssuer } from "./issuer.interface";
import { ISchema } from "./schema.interface";

export interface ICredentialType extends IApiResource {
  id: number;
  credential_def_id: string;
  description: string;
  has_logo: boolean;
  url: URL | string;
  last_issue_date: Date;
  schema: ISchema;
  issuer: IIssuer;
  credential_title?: string;
  highlighted_attributes?: string[];
  schema_label?: ISchemaLabel;
  claim_labels?: Record<string, Record<string, string>>;
}

export interface ICredentialTypeByIssuer {
  issuer: IIssuer;
  credentialTypes: ICredentialType[];
}
