/* eslint-disable max-len */
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./MainPage.module.scss";
import { memo } from "react";
import { TextHolder } from "@/shared/ui/TextHolder";
import { ColumnStack } from "@/shared/ui/Stack";
import { PageContainer } from "@/widgets/PageContainer";

interface MainPageProps {
	className?: string;
}

const MainPage = (props: MainPageProps) => {
	const { className } = props;

	return (
		<PageContainer center className={classNames(cls.mainPage, [className], {})}>
			<ColumnStack gap="16" width="50%">
				<ColumnStack align="center" max>
					<TextHolder size="l" title="Welcome to Work Wise Lietuva" />
					<TextHolder size="m" title="Empowering Your Workforce Management" />
				</ColumnStack>
				<TextHolder
					size="m"
					text="Welcome to Work Wise Lietuva, your trusted partner in efficient workforce management. With over 20 years of excellence in providing specialized personnel for the Oil & Gas, Marine, and Wind industries, we bring experience, quality, and efficiency to your fingertips."
				/>
				<ColumnStack align="center" max>
					<TextHolder size="m" title="Our Commitment to Excellence" />
				</ColumnStack>
				<TextHolder
					size="m"
					text="At Work Wise Lietuva, we specialize in worldwide contracting and project management across a diverse range of services including:"
				/>
				<TextHolder size="m" text="- Scaffolding and Rope Access" />
				<TextHolder size="m" text="- WebDeck & WebNet Solutions" />
				<TextHolder size="m" text="- Blasting & Painting" />
				<TextHolder size="m" text="- Piping & Construction" />
				<TextHolder size="m" text="- Cable Pulling & Pacing" />
				<TextHolder size="m" text="- Insulation" />
				<TextHolder size="m" text="- Non-Destructive Testing (NDT)" />
				<TextHolder size="m" text="- Blade Repair" />
				<TextHolder size="m" text="- ROV and Drone Inspection" />
				<TextHolder
					size="m"
					text="- Statutory Inspection & Testing for Wind Turbine Generators (WTG)"
				/>
				<TextHolder size="m" text="- Commissioning & Decommissioning" />
				<TextHolder size="m" text="- Maintenance and Labour Supply" />
				<TextHolder size="m" text="- Industrial Equipment Provision" />
				<TextHolder size="m" text="- Walk-to-Work Vessels and Crewing" />
				<TextHolder
					size="m"
					title="Streamlined Solutions for Managers and HR Professionals"
				/>
				<TextHolder
					size="m"
					text="Our application is designed exclusively for managers and HR administrators. With Work Wise Lietuva, you can effortlessly manage:"
				/>
				<TextHolder size="m" text="- Employee Registrations" />
				<TextHolder size="m" text="- Timecards" />
				<TextHolder size="m" text="- Payrolls" />
				<TextHolder size="m" title="Achieving Project Success Together" />
				<TextHolder
					size="m"
					text="We understand that the success of your projects relies on the experience and reliability of your team. That's why we provide experienced labour, follow rigorous procedures, and support you with our extensive knowhow. Work Wise Lietuva is your dependable partner for ensuring your projects are completed efficiently and to the highest standards."
				/>
				<TextHolder size="m" title="A Legacy of Innovation" />
				<TextHolder
					size="m"
					text="From pioneering the first Walk-to-Work Vessel Crew in the North Sea Dutch sector to enhancing platforms for leading companies, our innovative approach sets us apart. We believe in the power of cooperation, teambuilding, trust, transparency, and quality to drive success."
				/>
				<TextHolder
					size="m"
					title="Building Strong Teams for Lasting Success"
				/>
				<TextHolder
					size="m"
					text="We foster a collaborative environment where the 'We' mentality prevails over individual competition. By promoting teamwork, we enhance employee satisfaction and reduce turnover. Our approach ensures knowledge transfer, quality assurance, and the seamless handling of projects, even in the absence of key personnel."
				/>
				<TextHolder size="m" title="Clear Goals and Open Communication" />
				<TextHolder
					size="m"
					text="We set tangible, achievable, and measurable goals to ensure team formation and progress. Open communication and transparency are at the heart of our operations, allowing us to address challenges and achieve targets collaboratively."
				/>
				<TextHolder
					size="sm"
					title="Thank you for choosing Work Wise Lietuva. Together, we can achieve great things."
				/>
			</ColumnStack>
		</PageContainer>
	);
};

export default memo(MainPage);
