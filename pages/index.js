import Layout from '../components/PageLayout';
import { MetaData } from '../staticData/MetaData';
import Link from 'next/link';

// runs on server side,
export async function getStaticProps(){
  return {
    props: {
      MetaData
    }
  }
}

export default function Home({
  MetaData: { homePage }
  }) {
	return (
		<Layout siteMetaContent={homePage} homePage>
			<article>
				<h1>Frontend Coding Challenge</h1>
				<h2>Introduction</h2>
				<p>
					Hi there and thank you for your interest in working with us.
					<br />
					We would really like to know more about the way you work, so we think
					that starting with a small coding challenge is a great way to get an
					idea of your style.
				</p>
				<p>
					Since we value your time a lot, we do not think that you should spend
					more than 4 hours on this task. Implementing software is always about
					trade-offs, so we are honestly interested to see you balancing between
					clarity and getting-things-done™.
				</p>
				<p>
					Afterwards, we will have a follow-up call so you can guide us through
					your implementation but also to discuss your design decisions.
				</p>
				<h2>Exercise</h2>
				<p>
					The idea of this project is to implement a small client application
					for discovering trending repositories on GitHub.
				</p>
				<p>
					A list of the most popular repositories of the last week should be
					displayed and the user should be able to star them. The starred
					repositories should be visible either through a filter or in a
					different tab. Some basic info about the repo should be displayed,
					such as: repo name, link to GitHub, description and number of stars.
					To keep things simple, the starring won’t be sent back to GitHub’s
					servers but just stored in localStorage.
				</p>
				<p>
					Bonus task: if time allows, a language filter would be an awesome
					addition to have.
				</p>
				<h2>Implementation Details</h2>
				<p>
					GitHub provides a public search endpoint which you can use for
					fetching the most popular repositories:
				</p>
				<code>
          <Link href="https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc" replace>
            <a target="_blank">Link to github Repository</a>
          </Link>
				</code>
				<p>
					We will really value: concise and clean code, use of semantic HTML,
					CSS naming conventions and tests.
				</p>
				<p>Have fun!</p>
			</article>

			<hr />

			<article>
				<h2>Dear developers</h2>
				<p>I look forward to getting to know you.</p>
				<p>
					The task of the Code Challenge was demanding due to the lack of time.
					<br />
					There are two solutions.
				</p>
				<p>
					I wrote table.html within 4 hours. The code is still lacking
					fine-tuning in planning and implementation. Since I think pretending
					facts is really stupid for a long time work-together-relationship, I
					handed in the incomplete file.
				</p>
				<p>
					On the other hand, I also think it is important to submit &#145;finished&#146;
					code so that you can imagine that I would not commit just anything into
					a repo.
					<br />
					So I invested another 1.5 hours to program a handover version
					(table_updated.html).
				</p>
				<p>
					Jacob Hormann stated plans to write the frontend future in Vanilla JS.
					<br />
					So i wrote the app in Vanilla JS even though I did not know every
					detail about how to do it.
				</p>
				<p>I look forward to exchanging ideas and inputs with you.</p>
				<p>
					Until Thursday
					<br />
					Suk-Be
				</p>
			</article>
		</Layout>
	);
}
