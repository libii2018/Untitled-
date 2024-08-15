"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Accordion from "./../components/Accordion";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="px-4 pb-0 my-0 mx-auto max-w-[1440px] lg:px-8 lg:py-24">
        <section className="flex flex-col lg:items-center pt-16 text-center">
          <div className="flex pl-1 pr-2.5 py-1 mx-[18px] justify-center lg:items-center gap-2">
            <Button variant={"custom"} size={"custom"}>
              New feature
            </Button>
            <Button variant={"customSeconday"} size={"customSeconday"}>
              Check out the team dashboard
              <Image
                className="bold p-[3.33px]"
                src="/img/iconright.svg"
                width={18}
                height={18}
                alt="Picture of the iconright"
              />
            </Button>
          </div>
          <p className="p-4 text-4xl font-semibold leading-[44px] lg:leading-[72px] text-[#101828] lg:text-6xl lg:mb-6">
            Beautiful analytics to grow smarter
          </p>
          <p className="mb-8 text-lg font-normal leading-7 text-[#475467] lg:text-xl lg:w-[768px] lg:h-[60px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-3">
            <Button
              variant={"customPrimary"}
              size={"customPrimary"}
              className="mb-3"
            >
              Sign up
            </Button>
            <Button variant={"customThird"} size={"customThird"}>
              <Image
                className="mr-2"
                src="/img/iconplay.svg"
                width={16.67}
                height={16.67}
                alt="Picture of the iconright"
              />
              Demo
            </Button>
          </div>
        </section>

        <section className="flex flex-col items-center py-16">
          <div className="lg:h-[480px] lg:overflow-hidden lg:mb-24 pb-16">
            <Image
              className="mr-[3.67px] lg:hidden"
              src="/img/MacbookPro16mockup.png"
              width={343}
              height={202}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: "343px",
                height: "202px",
              }}
              alt="Picture of the iconright"
            />
            <Image
              className="mr-[3.67px] hidden lg:block"
              src="/img/MacbookPro16mockup-lg.png"
              width={1216}
              height={710.13}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: "1216px",
                height: "710.13px",
              }}
              alt="Picture of the iconright"
            />
          </div>
          <div className="text-center">
            <p className="mb-8 text-base font-normal leading-6 text-[#475467] lg:font-medium lg:text-base">
              Join 4,000+ companies already growing
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 place-items-center lg:grid-cols-5 lg:gap-[92px]">
              <Image
                className="lg:hidden"
                src="/img/logoLayers.svg"
                width={102.48}
                height={34}
                alt="Picture of the iconright"
              />
              <Image
                className="lg:hidden"
                src="/img/logoSisyphus.svg"
                width={118.63}
                height={34}
                alt="Picture of the iconright"
              />
              <Image
                className="lg:hidden"
                src="/img/logoCircooles.svg"
                width={128.45}
                height={34}
                alt="Picture of the iconright"
              />
              <Image
                className="lg:hidden"
                src="/img/logoCatalog.svg"
                width={112.31}
                height={34}
                alt="Picture of the iconright"
              />
              <Image
                className="lg:hidden"
                src="/img/logoQuotient.svg"
                width={131.26}
                height={34}
                alt="Picture of the iconright"
              />
              <Image
                className="hidden lg:block"
                src="/img/logoLayers.svg"
                width={146}
                height={48}
                alt="Picture of the iconright"
              />
              <Image
                className="hidden lg:block"
                src="/img/logoSisyphus.svg"
                width={169}
                height={48}
                alt="Picture of the iconright"
              />
              <Image
                className="hidden lg:block"
                src="/img/logoCircooles.svg"
                width={183}
                height={48}
                alt="Picture of the iconright"
              />
              <Image
                className="hidden lg:block"
                src="/img/logoCatalog.svg"
                width={160}
                height={48}
                alt="Picture of the iconright"
              />
              <Image
                className="hidden lg:block"
                src="/img/logoQuotient.svg"
                width={187}
                height={48}
                alt="Picture of the iconright"
              />
              <Image
                className="lg:hidden"
                src="/img/logoHourglass.svg"
                width={136.17}
                height={34}
                alt="Picture of the iconright"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mt-12 text-center mb-12 lg:flex lg:flex-col lg:items-center lg:mb-16">
            <p className="font-normal	text-sm leading-5 mb-3 text-[#6941C6] lg:font-semibold lg:text-base">
              Features
            </p>
            <p className="font-semibold text-3xl mb-3 text-[#101828] leading-[38px] lg:text-4xl">
              Analytics that feels like it’s from the future
            </p>
            <p className="font-normal text-lg text-[#475467] leading-7 lg:text-xl lg:leading-[30px] lg:w-[768px] lg:h-[60px]">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="lg:mb-8">
                <Image
                  className="lg:hidden"
                  src="/img/mail.svg"
                  width={20}
                  height={20}
                  alt="Picture of the mail"
                />
                <Image
                  className="hidden lg:block"
                  src="/img/mail.svg"
                  width={24}
                  height={24}
                  alt="Picture of the mail"
                />
              </CardHeader>
              <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:text-xl lg:mb-2">
                Share team inboxes
              </CardTitle>
              <CardContent className="font-normal	text-base leading-6 text-[#475467] lg:text-base">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="lg:mb-8">
                <Image
                  className="lg:hidden"
                  src="/img/bar-chart-2.svg"
                  width={20}
                  height={20}
                  alt="Picture of the mail"
                />
                <Image
                  className="hidden lg:block"
                  src="/img/bar-chart-2.svg"
                  width={24}
                  height={24}
                  alt="Picture of the mail"
                />
              </CardHeader>
              <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:text-xl lg:mb-2">
                Deliver instant answers
              </CardTitle>
              <CardContent className="font-normal	text-base leading-6 text-[#475467] lg:text-base">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="lg:mb-8">
                <Image
                  className="lg:hidden"
                  src="/img/zap.svg"
                  width={20}
                  height={20}
                  alt="Picture of the mail"
                />
                <Image
                  className="hidden lg:block"
                  src="/img/zap.svg"
                  width={24}
                  height={24}
                  alt="Picture of the mail"
                />
              </CardHeader>
              <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:text-xl lg:mb-2">
                Manage your team with reports
              </CardTitle>
              <CardContent className="font-normal	text-base leading-6 text-[#475467] lg:text-base">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="lg:mb-8">
                <Image
                  className="lg:hidden"
                  src="/img/smile.svg"
                  width={20}
                  height={20}
                  alt="Picture of the mail"
                />
                <Image
                  className="hidden lg:block"
                  src="/img/smile.svg"
                  width={24}
                  height={24}
                  alt="Picture of the mail"
                />
              </CardHeader>
              <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:text-xl lg:mb-2">
                Connect with customers
              </CardTitle>
              <CardContent className="font-normal	text-base leading-6 text-[#475467] lg:text-base">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="lg:mb-8">
                <Image
                  className="lg:hidden"
                  src="/img/command.svg"
                  width={20}
                  height={20}
                  alt="Picture of the mail"
                />
                <Image
                  className="hidden lg:block"
                  src="/img/command.svg"
                  width={24}
                  height={24}
                  alt="Picture of the mail"
                />
              </CardHeader>
              <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:text-xl lg:mb-2">
                Connect the tools you already use
              </CardTitle>
              <CardContent className="font-normal	text-base leading-6 text-[#475467] lg:text-base">
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="lg:mb-8">
                <Image
                  className="lg:hidden"
                  src="/img/message-circle.svg"
                  width={20}
                  height={20}
                  alt="Picture of the mail"
                />
                <Image
                  className="hidden lg:block"
                  src="/img/message-circle.svg"
                  width={24}
                  height={24}
                  alt="Picture of the mail"
                />
              </CardHeader>
              <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:text-xl lg:mb-2">
                Our people make the difference
              </CardTitle>
              <CardContent className="font-normal	text-base leading-6 text-[#475467] lg:text-base">
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col items-center text-center py-16">
          <Image
            className="mb-8"
            src="/img/logoSisyphus.svg"
            width={140.83}
            height={40}
            alt="Picture of the iconright"
          />
          <p className="font-medium text-[32px] leading-[38px] text-[#101828] mb-8 lg:text-5xl lg:leading-[60px]">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </p>
          <Avatar className="mb-4">
            <AvatarImage src="/img/avatar.png" width={64} height={64} />
          </Avatar>
          <p className="font-medium text-lg text-[#101828] mb-1 lg:text-base">
            Candice Wu
          </p>
          <p className="font-normal text-base text-[#667085]">
            Product Manager, Sisyphus
          </p>
        </section>

        <section className="py-16 mt-12 text-center">
          <div className="text-center mb-12 lg:mb-16 lg:flex lg:flex-col lg:items-center">
            <p className="font-normal	text-sm leading-5 mb-3 text-[#6941C6] lg:font-medium lg:mb-4 ">
              Features
            </p>
            <p className="font-semibold text-3xl mb-3 text-[#101828] leading-[38px] lg:text-4xl lg:mb-5">
              Cutting-edge features for advanced analytics
            </p>
            <p className="font-normal text-lg text-[#475467] leading-7 lg:text-xl lg:leading-[30px] lg:w-[768px]  lg:h-[60px]">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
          <div className="flex justify-center lg:relative lg:w-[1216px] lg:h-[558px] ">
            <Image
              className="mr-[3.67px] lg:hidden"
              src="/img/iPhone12Promockup.jpg"
              width={284}
              height={360}
              style={{
                width: "284px",
                height: "360px",
              }}
              alt="Picture of the iconright"
            />
            <Image
              className="hidden lg:block border-[1px] border-[#101828] rounded-[10px] absolute top-[50%] left-[65%] translate-x-[-50%] translate-y-[-50%]"
              src="/img/screenmockup-2.png"
              width={768}
              height={512}
              alt="Picture of the iconright"
            />
            <Image
              className="hidden lg:block absolute top-16 left-[23%]"
              src="/img/screenmockup-3.png"
              width={244}
              height={497.34}
              alt="Picture of the iconright"
            />
          </div>
        </section>

        <section className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:gap-8">
          <Card className="flex flex-col items-center text-center mb-7">
            <CardHeader>
              <Image
                src="/img/mail.svg"
                width={20}
                height={20}
                alt="Picture of the mail"
              />
            </CardHeader>
            <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:font-semibold lg:text-xl lg:leading-[30px]">
              Share team inboxes
            </CardTitle>
            <CardContent className="font-normal	text-base leading-6 text-[#475467]">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </CardContent>
            <CardFooter>
              <Button variant={"customForty"} className="">
                Learn more
                <Image
                  className="ml-[4px]"
                  src="/img/iconright.svg"
                  width={9.33}
                  height={9.33}
                  alt="Picture of the iconright"
                />
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col items-center text-center mb-7">
            <CardHeader>
              <Image
                src="/img/zap.svg"
                width={20}
                height={20}
                alt="Picture of the mail"
              />
            </CardHeader>
            <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:font-semibold lg:text-xl lg:leading-[30px]">
              Deliver instant answers
            </CardTitle>
            <CardContent className="font-normal	text-base leading-6 text-[#475467]">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </CardContent>
            <CardFooter>
              <Button variant={"customForty"} className="">
                Learn more
                <Image
                  className="ml-[4px]"
                  src="/img/iconright.svg"
                  width={9.33}
                  height={9.33}
                  alt="Picture of the iconright"
                />
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col items-center text-center mb-7">
            <CardHeader>
              <Image
                src="/img/bar-chart-2.svg"
                width={20}
                height={20}
                alt="Picture of the mail"
              />
            </CardHeader>
            <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-1 lg:font-semibold lg:text-xl lg:leading-[30px]">
              Manage your team with reports
            </CardTitle>
            <CardContent className="font-normal	text-base leading-6 text-[#475467]">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </CardContent>
            <CardFooter>
              <Button variant={"customForty"} className="">
                Learn more
                <Image
                  className="ml-[4px]"
                  src="/img/iconright.svg"
                  width={9.33}
                  height={9.33}
                  alt="Picture of the iconright"
                />
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="py-16 mt-12 lg:flex lg:flex-col lg:items-center">
          <div className="py-16 text-center">
            <p className="font-semibold text-3xl mb-3 text-[#101828] leading-[38px] lg:text-4xl lg:mb-5">
              Frequently asked questions
            </p>
            <p className="font-normal text-lg text-[#475467] leading-7 lg:text-xl">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="text-left lg:max-w-[768px]">
            <Accordion
              title="Is there a free trial available?"
              content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
            />
            <Accordion title="Can I change my plan later?" content="" />
            <Accordion title="What is your cancellation policy?" content="" />
            <Accordion
              title="Can other info be added to an invoice?"
              content=""
            />
            <Accordion title="How does billing work?" content="" />
            <Accordion title="How do I change my account email?" content="" />
          </div>
        </section>

        <section className="flex flex-col items-center px-5 text-center py-16">
          <div className="w-[126px] h-[56px] flex flex-row justify-center relative mb-8">
            <Image
              className="absolute right-[57%]"
              src="/img/avatar-3.png"
              width={48}
              height={48}
              alt="Picture of the iconright"
            />
            <Image
              className="absolute z-10 top-[-6px]"
              src="/img/avatar-1.png"
              width={56}
              height={56}
              alt="Picture of the iconright"
            />
            <Image
              className="absolute z-1 left-[57%]"
              src="/img/avatar-2.png"
              width={48}
              height={48}
              alt="Picture of the iconright"
            />
          </div>
          <p className="font-medium text-xl leading-[30px] text-[#101828] mb-1">
            Still have questions?
          </p>
          <p className="font-normal text-base leading-6 text-[#475467] mb-6">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <Button variant={"customPrimary"} className="">
            Get in touch
          </Button>
        </section>

        <section className="py-16">
          <div className="text-left mb-12">
            <p className="font-normal	text-sm leading-5 mb-3 text-[#6941C6] lg:font-semibold lg:text-base lg:mb-3">
              Launch faster
            </p>
            <p className="font-semibold text-3xl mb-3 text-[#101828] leading-[38px] lg:font-semibold lg:text-4xl lg:mb-5 lg:leading-[30px]">
              Build something great
            </p>
            <p className="font-normal text-lg text-[#475467] leading-7 lg:text-xl lg:leading-[30px] lg:w-[768px]">
              We’ve done all the heavy lifting so you don’t have to — get all
              the data you need to launch and grow your business faster.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2">
            <div className="flex flex-col gap-8 lg:grid lg:px-8 lg:py-20  lg:grid-cols-2 lg:gap-4 lg:gap-x-8 lg:gap-y-16">
              <Card className="mb-8 text-center lg:mb-0 w-[264px] h-[168px]">
                <CardHeader className="font-semibold text-5xl text-[#6941C6] tracking-[-2%] mb-3 p-0 mt-0 ml-0 mr-0">
                  4,000+
                </CardHeader>
                <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-2">
                  Global customers
                </CardTitle>
                <CardContent className="font-normal text-sm leading-6 text-[#475467] p-0 m-0">
                  We’ve helped over 4,000 amazing global companies.
                </CardContent>
              </Card>
              <Card className="mb-8 text-center lg:mb-0 w-[264px] h-[168px]">
                <CardHeader className="font-semibold text-5xl text-[#6941C6] tracking-[-2%] mb-3 p-0 mt-0 ml-0 mr-0">
                  600%
                </CardHeader>
                <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-2">
                  Return on investment
                </CardTitle>
                <CardContent className="font-normal text-sm leading-6 text-[#475467] p-0 m-0">
                  Our customers have reported an average of ~600% ROI.
                </CardContent>
              </Card>
              <Card className="mb-8 text-center lg:mb-0 w-[264px] h-[168px]">
                <CardHeader className="font-semibold text-5xl text-[#6941C6] tracking-[-2%] mb-3 p-0 mt-0 ml-0 mr-0">
                  10k
                </CardHeader>
                <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-2">
                  Global downloads
                </CardTitle>
                <CardContent className="font-normal text-sm leading-6 text-[#475467] p-0 m-0">
                  Our app has been downloaded over 10k times.
                </CardContent>
              </Card>
              <Card className="mb-8 text-center lg:mb-0 w-[264px] h-[168px]">
                <CardHeader className="font-semibold text-5xl text-[#6941C6] tracking-[-2%] mb-3 p-0 mt-0 ml-0 mr-0">
                  200+
                </CardHeader>
                <CardTitle className="font-medium text-lg leading-7 text-[#101828] mb-2">
                  5-star reviews
                </CardTitle>
                <CardContent className="font-normal text-sm leading-6 text-[#475467] p-0 m-0">
                  We’re proud of our 5-star rating with over 200 reviews.
                </CardContent>
              </Card>
            </div>
            <Image
              className="lg:hidden block"
              src="/img/fenetre.png"
              width={343}
              height={240}
              alt="Picture of the fenetre"
            />
            <Image
              className="hidden lg:block"
              src="/img/fenetre-lg.png"
              width={560}
              height={560}
              alt="Picture of the fenetre"
            />
          </div>
        </section>

        <section className="flex flex-col py-16 text-center lg:items-center">
          <p className="p-4 text-4xl font-semibold leading-[44px] text-[#101828]">
            Start your free trial
          </p>
          <p className="mb-8 text-lg font-normal leading-7 text-[#475467]">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex flex-row-reverse items-center justify-center gap-3">
            <Button
              variant={"customPrimary"}
              size={"customPrimary"}
              className="mb-3"
            >
              Get started
            </Button>
            <Button variant={"customThird"} size={"customThird"}>
              Learn more
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
