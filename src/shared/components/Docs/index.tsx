import React from "react";

export function P(props: React.PropsWithChildren) {
 return <p className="pb-2">{props.children}</p>;
}

export function T(props: React.PropsWithChildren) {
 return <p className="text-3xl font-semibold mb-3">{props.children}</p>;
}

export function L(props: React.PropsWithChildren) {
 return <ul className="list-disc pl-12 pb-3">{props.children}</ul>;
}
export function LN(props: React.PropsWithChildren) {
 return <ul className="list-decimal pl-12 pb-3">{props.children}</ul>;
}
