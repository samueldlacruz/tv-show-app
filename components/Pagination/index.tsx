import { formatPagination } from '@/utils/pagination.util'
import React, { useEffect, useState } from 'react'
import { PaginationPropsI } from './Pagination'

const Pagination = ({
  limitData,
  total,
  onChange,
  offset: _offset = 0
}: PaginationPropsI) => {
  let [offset, setOffset] = useState(_offset)
  let totalPagination = Math.ceil(total / limitData)
 
  const to = limitData * (offset + 1);

  const handleClick = (i: number) => {
    if (typeof onChange == 'function' && i !== offset) {
      onChange(i)
      setOffset(i)
    }
  }

  useEffect(() => {
    setOffset(_offset || 0)
  }, [_offset])

  return (
    <div className='mt-5 flex md:flex-row flex-col justify-center md:justify-between md:items-center'>
      <div
        role="status"
        className="text-white font-medium"
      >
        Showing {(offset * limitData) + 1} to {to > total ? total : to} of {total} entries
      </div>

      <div>
        <div>
          <ul className="flex gap-3 mt-2">
            <li
              onClick={() => {
                if (offset > 0) return handleClick(offset - 1)
              }}
            >
              <span
                tabIndex={0}
                className="cursor-pointer border-gray-100 bg-white/10 px-2 py-1 rounded-md text-white"
              >
                Previous
              </span>
            </li>

            {
              formatPagination(offset, totalPagination, 4).map((index: number, i: number) => {
                return (
                  <li
                    key={`pagination-${i}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleClick(index)
                    }}
                  >
                    <span
                      key={`pagination-${i}`}
                      tabIndex={0}
                      className={`${offset === index ? "bg-slate-400/25 text-white" : ""} rounded-full cursor-pointer bg-white/60 px-3 py-1`}
                    >
                      {index + 1}
                    </span>
                  </li>
                )
              })}

            <li
              onClick={() => {
                if (offset < Number(totalPagination - 1)) return handleClick(offset + 1)
              }}
            >
              <span
                tabIndex={0}
                className="cursor-pointer border-gray-100 bg-white/10 px-2 py-1 rounded-md text-white"
              >
                Next
              </span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pagination
