import { langs } from "../constant";
import { GetStaticProps } from "next";

export default function About({ locale }: Props) {
  const { title, desc } =
    locale === "en" ? langs["en"].about : langs["fr"].about;

  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-around p-24`}>
      <h1 className="text-6xl text-center font-bold">{title}</h1>
      <div className="text-2xl mt-20 ">{desc}</div>
    </section>
  );
}

type Props = {
  locale?: string;
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};
