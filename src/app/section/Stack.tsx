import React from 'react'
import FrontStack from '../component/FrontStack'
import BackStack from '../component/BackStack'
import AppStack from '../component/AppStack'
import ToolStack from '../component/ToolStack'

function Stack() {
  return (
    <section id="stacks" className="flex flex-col gap-6 min-h-[150vh]">
						<div className="font-bold text-4xl text-main">Frontend</div>
						<FrontStack />
						<div className="text-sub">
							정적 타입과 커스텀 훅, 그리고 적절한 랜더링 방식으로 필요한
							페이지를 구성 할 수 있습니다
						</div>
						<div className="font-bold text-4xl text-main">Backend</div>
						<BackStack />
						<div className="text-sub">
							MVC패턴을 중심으로 서버를 이해하고, 테이블간의 관계를 파악할 수
							있습니다
						</div>
						<div className="font-bold text-4xl text-main">App</div>
						<AppStack />
						<div className="text-sub">
							기초적인 코틀린 네이티브를 이해하고, 플러터를 통해 앱을 만들 수
							있습니다.
						</div>
						<div className="font-bold text-4xl text-main">Tools</div>
						<ToolStack />
						<div className="text-sub">
							Git Flow를 사용하여 버전관리를 하고, Jira 티켓을 통해 프로젝트를
							관리합니다.
						</div>
					</section>
  )
}

export default Stack