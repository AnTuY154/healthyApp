import React, { useEffect, useState } from 'react'
import './record.scss'
import { ChartFilter, LineChartType } from '../../components/chart/type'
import { RecordBox } from '../../components/record_box/record_box'
import { LineChart } from '../../components/chart/chart'
import { ExecriseBoard } from '../../components/exercise_board/execrise_board'
import { ExecriseItemType } from '../../components/exercise_board/type'
import { DiaryCard } from '../../components/diary_card/diary_card'
import { DiaryCardType } from '../../components/diary_card/type'
import { ButtonShowMore } from '../../components/button_show_more/button_show_more'

export function Record (): JSX.Element {
  const [lineChartData, setLineChartData] = useState<LineChartType>({
    datasets: [],
    xAxisLabels: []
  })
  const [execriseData, setExecriseData] = useState<ExecriseItemType[]>([])

  const [filter, setFilter] = useState<ChartFilter[]>([])

  const [diary, setDiary] = useState<DiaryCardType[]>([])

  const handleFilter = (type: string): void => {
    setFilter((current: ChartFilter[]) => {
      const clone = [...current]
      const newFilter = clone.map((item) => {
        if (item.type === type) {
          return { ...item, isActive: true }
        }
        return { ...item, isActive: false }
      })
      return newFilter
    })
  }

  const handleLoadingMoreData = (page: number): void => {
    setExecriseData((current) => {
      const clone = [...current]
      const newData = [
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        },
        {
          description: '家事全般',
          energy: '26kcal',
          time: '10 min',
          type: '立位・軽い'
        }
      ]
      return [...clone, ...newData]
    })
  }

  const handleShowMoreDiart = (): void => {

  }

  useEffect(() => {
    setLineChartData({
      xAxisLabels: [
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月'
      ],
      datasets: [
        {
          data: [100, 90, 80, 70, 60, 50, 100, 90, 80, 70, 60, 50],
          borderColor: '#FFCC21',
          backgroundColor: '#FFCC21'
        },
        {
          data: [100, 80, 70, 90, 20, 30, 40, 60, 80, 20, 10, 90],
          borderColor: '#8FE9D0',
          backgroundColor: '#8FE9D0'
        }
      ]
    })

    setFilter([
      {
        label: '日',
        onClick: () => handleFilter('1'),
        isActive: true,
        type: '1'
      },
      {
        label: '週',
        onClick: () => handleFilter('2'),
        type: '2'
      },
      {
        label: '月',
        onClick: () => handleFilter('3'),
        type: '3'
      },
      {
        label: '年',
        onClick: () => handleFilter('4'),
        type: '4'
      }
    ])

    setExecriseData([
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      },
      {
        description: '家事全般',
        energy: '26kcal',
        time: '10 min',
        type: '立位・軽い'
      }
    ])

    setDiary([
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキ',
        time: '2021.05.21 23:25'
      },
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキ',
        time: '2021.05.21 23:25'
      },
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキテキストテキストテキストテキストテキスト',
        time: '2021.05.21 23:25'
      },
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキストテキスト',
        time: '2021.05.21 23:25'
      },
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        time: '2021.05.21 23:25'
      },
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキトテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        time: '2021.05.21 23:25'
      },
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキスキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキトテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        time: '2021.05.21 23:25'
      },
      {
        description:
          '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキキストテキストテキストテキテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        time: '2021.05.21 23:25'
      }
    ])
  }, [])

  return (
    <div className="record">
      <div className="record_card">
        <RecordBox
          title="Body Record"
          description="自分のカラダの記録"
          image="MyRecommend-1"
        />
        <RecordBox
          title="My Exercise"
          description="自分の運動の記録"
          image="MyRecommend-2"
        />
        <RecordBox
          title="My Diary Record"
          description="自分の日記"
          image="MyRecommend-3"
        />
      </div>

      <div className="record_body">
        <LineChart
          title="Body Record"
          time="2021.05.21"
          filter={filter}
          datasets={lineChartData.datasets}
          xAxisLabels={lineChartData.xAxisLabels}
        />
      </div>

      <div className="record_exercise">
        <ExecriseBoard
          loadingData={handleLoadingMoreData}
          time="2021.0.5.21"
          title="My execrise"
          execriseData={execriseData}
        />
      </div>

      <div className="record_diary">
        <p>My Diary</p>
        <div className="record_diary-list">
          {diary?.map((item, index) => (
            <DiaryCard key={index} {...item} />
          ))}
        </div>
      </div>

      <ButtonShowMore onClick={handleShowMoreDiart} text="自分の日記をもっと見る"/>
    </div>
  )
}
