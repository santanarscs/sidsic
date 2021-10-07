import { Request } from "express";
import { KeycloakProfile, KeycloakTokenParsed } from "keycloak-js";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { validateAuth, Token } from "../util/auth";

export type AuthServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (
  ctx: GetServerSidePropsContext<Q>,
  auth: { tokenParsed: KeycloakTokenParsed & KeycloakProfile; token: string }
) => Promise<GetServerSidePropsResult<P>>;

export function withAuth<P, Q extends ParsedUrlQuery>(
  func: AuthServerSideProps<P, Q>
): GetServerSideProps<P, Q> {
  return async (context) => {
    const request = context.req as Request;
    const auth = validateAuth(request);

    if (!auth) {
      const destination = "/";
      return {
        redirect: {
          permanent: false,
          destination,
        },
      };
    }

    const token = (auth as Token).token;
    const payload = (auth as Token).payload;

    const result = await func(context, {
      tokenParsed: payload,
      token,
    });
    if ("props" in result) {
      result.props = {
        user: payload,
        ...result.props,
      };
    }
    return result;
  };
}