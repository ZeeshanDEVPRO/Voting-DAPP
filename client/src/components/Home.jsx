import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Button>
      <div className="hero">
        <div className="top">Welcome to <span>MyVote.com</span></div>

        <p>We are India's largest Blockchain based online voting platform.Our apps are available on Playstore and
          Appstore too. MyVote platform allows you to conduct election online, without any hassle. Here, you can create your election and vote. You are also allowed to add candidates and see the results.
        </p>
        <button><Link to="/create" style={{ textDecoration: "none", color: "white" }}>Create Election Now </Link></button>
      </div>
      <div className="sec2">
        <div className="top">Technologies used to <span>build</span></div>
        <p>
          We have used basic level technologies to build this platform. We have used React.js for frontend and Solidity for smart contract.Further ether.js latest version has been used for interaction between frontend and smart contract.It is obvious that data has to stored in the blockchain itself.
        </p>
        <div className="logos">
          <img className='edit' src='https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278326_1280.png' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
          <img className='edit' src='data:image/png;base64,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' />
          <img src='https://www.svgrepo.com/show/374088/solidity.svg' />
          <img className='edit' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDw0QDQ0OEBMQDQ4OEBAQDRANFxEYFhYRFRMYHSggGBomHxUTITIjJSkrLi46GyAzODMuNzQtLysBCgoKDg0OGA8QGzAfFSUtLSsrKysrLS0tListLS0tKy8rLS0tKysvLS4rKy0rLS0tLSstKy0rLS0tLS0rLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAQEBAQEBAQAAAAAAAAAAAQIGBwUEAwj/xAA8EAACAgADAwcJCAICAwAAAAAAAQIDBAURBiExEiJBUWFxgQcTFBZCU5GT0SMyUlSSobHSgsEzYnLw8f/EABsBAAIDAQEBAAAAAAAAAAAAAAECBAUGAAMH/8QAOBEAAgEBBAUKBQMFAQAAAAAAAAECAwQRITEFE0Fx0RIUUVNhgZGSwfAiMlKh4UKisRUzNGLxQ//aAAwDAQACEQMRAD8A9sutjCMpzkowim5Sk9IqK4ts8x2n8pVjlKnAJRitzxE46zl2wg9yXa9e5Dyr7Qydiy6qWkIpTxLT+9J741vsS0b711HnJp9FaKg4KtWV7eKWy7Y3037L8Lum/CPUqO+5H68bmmKxDfnsRbc37yyUl8NdEfkANEklgjwAACcACHHA0CoDYoRpERpAEbCKihAFbCNIIqFEbCKgio4QoQRpCiXhFBUjhGwkaQRoW8W8iP04bGXUvWq2yp9dc5R/hn5ypCtCX3ZHZ5Ft7fU4wxS8/Xw84kldFdfVL9n2npGExVd9cLapqdc1rGUeDR4KjrdgM7lh8SsNOX2F700fCFr+7JdWvB+BS6R0bCUHUpK6SxuWT4PbhnvJ9ltslJQm709vQeqgAzRcn+cc3xbxGKxF7erttnPwcnovhofkAPpMVckkV4AATgADjiGgVAbFKEEaAI2EVBGgCNkRpAqFFbCKihAEKEEaQBAUFSOEbCRsiNC3iERQaQBWwigqQBGwkai2tGno1vT6muDIaSAebPQvXtdX7IHnxCt/pdm6Cb/Ua/SfDABfFkAAccClQQGxWwihGkARsIqBUARsIqBtCiNhFQR9bZnJZZhi66FqoffumvZqXHxe5LvEnOMIucsEsWBJtpLM+SjSPT9rdisMsJKzCU+buoXKcYuT87Wlzk9Xvl069mh5iiPZLXTtUOXDY7mnn7Z1am6buZUAbSJB4NmUjSCKgNiBFBUAVsqKgipAEbCRoFQBGwjREaQogIa0BwDnwATjRA0AgNitg0gjSAIEEEVAEbCKgjSFEbCNImhUAW8p7JsHkXoOEUpx0xF+k7deMV7Nfhq/Fs4fyd5D6XifPzj9hh2pPXhO7jGHbpxfh1nsBnNN2zKzx3y9F6+BNsdL/wBH3A8b26yL0LFOUI6YfENzr04Rl7Vfg3qux9h7IfH2nyeOOwtlD0U/v0yfs2rh4Pen2NlZo+183rJv5Hg+Pd/F572mlrIXL5ll77TxFIpbapQlKE4uM4ScZRfFST0aYNmUREaIaAI2CoIqQBWwkaBUARsIqCKhRCoqCNIAjZnQGtAcKc6aCCJzNI2EUqNIAgCCKgCNhGkEVCiNhFQRpAEIj+lNbnKMI/enJRjruXKb0X8mTS+D61xAK2e65BlMMDhq8PDe4rWyX47X96X/AL1I+oc7sXnnp+FjKT+3q0rvXXLTdPua/fU6IwNojUjVkqnz347/AH9i8puLinHLYAAeQ55r5Ssj5M1j61zZtQvS6LOEZ+O5eC6zhj3nHYSvEU2U2LWFsXGS6dH0rt6TxPNsvsweItw9n3q3ufRKD3xku9Go0Ta9ZT1Uvmj91+MvAprfQ5E+Wsn/AD+T8aKioJFuV14SNAqFEbCNERUAQI0EjSAIQqKioDEbIUoOvFOcNII0icaQBBFQBAjSCKhRGwioGkAQIqBoArZ+nLMuuxd0aKIcuyWr01SSiuMm3wRvNMsvwdrpvhyJpKS3pxlF8JJriuJ6b5PMi9Fw3pFkdL8Sk9/GFPGMexvi/DqP07c5CsdhXKEdcRRrKrTjNe1X49HakUktLRVr1WGryv7endf2ZYkrmjdHlfq6OziecbJZy8vxcLG35mfMuS92397TrXH4ntkZKSTTTTWqa3prrP8APmh6f5OM989S8HZLWyha1t8ZU8NP8Xou5o89NWTlR18VisHu2eGW7cGw17nq3k8vfv7nbAAzZaA43yh5J6RQsVXHW7Dp8rTjKni/0738TsjLWu570+KPahWlRqKpHNffpXeedWmqkHCWTPAkU+3tdknoWKlGK0os1nS+hR131+D/AGaPio2lOpGpBTj8rxRmKkXCTjLNBFQRpDHkRGkgioAjYNIIqAIEVBFQBCkNaAALznUEEaRPNG2CoIqFEbBUEaQBAioqKgCNhHR7DZH6bi05rXD0aTt6pPXm1+LXwTOeqrlOUYRi5Tk1GMVxlJvRJHt2zGTRwGFroWjs+/dJe1a1v8FwXcVmk7ZzeldF/HLBer4dp72WlrJ4/Kvd3vYfZABjy5PKfKFkPo2I9KrjpTe9ZpLdC7i13Pj8Tm8rx1mFvqxFb59ctUuiS6Yvsa1R7bmuX14vD2Yexc2yOmvTGXRJdqejPE8xwNmFusw9i0nXLR9TXRJdjWjNVoy1KvSdKeMkrt8cvw/EpbbSdKfLjk/s8/yj27LcbXiaK763rCyKkutdafanqvA/WeaeTjOvNWPBWPmWtypb9m3pj/kv3XaelmftlmdnquGzNbveBZ2esqtNS27d/vEAAinufD2pydY3CyrS+1hz6X/3S+73NbvgeQclptNNNPRp7mmuKaPezzTyhZL5q5YuC5lz0sS4Ru46/wCW996Zd6ItXJeolk8Vv6O/+d5U6Ts9610c1nu6e7+NxyCKEimgKJsI2gggCFCCKgCBGkEaQBGzINaFAC85xFQRUTjRthFQRpAECNIFAI2EEVI/dk2W2YzEVYevjZLfLohBfem+5Cykoq94IGLdyzOu8meRcucsdZHm1twoT6bPan4cF2t9R6YfmwOErw9VdNceTXXFRiuxf7P0mHtlpdoqubyyS6F7xZeUKSpQUfHeAARj1B5Jt/mFWIxrjXFaUR83KxcZzT1a16lw+J3G2ed+hYV8iWl92sKdOMfxT8F+7R5GkX+hrK73XluXq/Tx2oqtJV8FSW9+nEtcnFqUW4yi1KMlxUk9U0ezbMZusbhoW7lNcy6K6LFxfc9zXeeMnQbF5z6FioqT0ou0jb1R/DLwb+DZO0lZdfSvj86xXquHaQrFaNVUx+V4P0Z68ADJGiB+PM8DXiqLKJrm2R016U+Kku1PRn7AFNp3rBgaTVzyPD8dg54e6yixaTrlyZdT6muxrR+J/JHf+UXKoyrjjI6KdbULP+yb0i+9N/ucAjYWS0qvSU9uT37ePeZK1UHQquGzNbveHcEaCKj3IhEaQRUcI2EaIjaFEvMg0Drxb0c4UqKicaUI0EUB5thFQKkARsHqvk6yL0bDvEzjpdiUmk+MKfZXe+PwOL2KyL07Fx5S1w9Ok7upr2a/Fr4JnsxQaZtd0VQjm8Zbti9X3bGT7BRvesfd6v08QADOFoD+VtkYRlOTUYRTlKT3JRS1bZ/U4TyjZ3yYLBVvnTSle10Q4xh48e5dp72azyr1FTX/ABbWeVeqqUHN+2chtJm0sdip3PVVrmUxfs1rh4ve33nywfer2PzKST9Ha1WukrIJ+K13GwcqVCMYtqMcle0st5mrqlWTkk5Pbcrz4SLodCtjMz/Lx+ZX9TS2KzH3C/XV9RedUfrj5lxOdmrfQ/B8D+OF2rzGqEa44nmQWkeVCuTUehatavxP7eueZ/mF8qr+pVsVmXuI/Mq+ppbFZl7mPzK/qR27Fn8H7T0utiy5f7jPrlmf5hfKq/qX1xzP8xH5VX0NLYrMfdR+ZX9TS2KzD3UfmVi32H/T9oLrf/v4yPn5lnmMxUVC61zgnqoKMYx5XW+Slr4nz0dCtisw/BH5kD+WK2Tx1Nc7ZVRcYLlS0lCUuSuL06R4V7NFKMJRS6E0iPUs9pl8U4yfa72fEKgiolEJsI0EaFEbCAKkAVsAoALec8VBGieaNsBIJFQBGwjddcpSjGKcpSajGK4uTeiSCO48m2RecseOsjzKm40J8HZ0z8Fu732Ee0140KTqS2fd7ENSpupNQW07LZbJlgcLCnc7Jc+6S6bXxWvUtyXcfaAMRUqSqTc5Yt4sv4xUUorJAACDH4M5zGGDw9mInwgubHplN7oxXezxbGYmd9tl1j5VlknKT7X0LsW5eB0vlAzr0i/0eD1pw7aklwndwl8N6+JzmBwlmItrorWtlklGPUutvsS1fgajRlm1FLWSwk8X2LP8soLfaNbU5EclhvfvBHS+T/JPSL/SZrWnDtcjXhK7ivhufwPUT8OU5fXhKK8PWubBb30ylxcn2t6n7iittpdoquf6ckuz85ltZaGppqO3bvAAIhJAAOOAAOOAAOOPKtrcnWExLcVpTbrKpdC/FHw1Xg0fGR6ztBlccZhp1blPjVJ9E1w8Hw8TymcHGTjJOMotxlF8VJPRpmn0fatdTufzrB+j49pkdJ2XUVb4/JLFeq4dj8co0iJGkTirbCRQVAFIDQOFvOeCQSKicaNsG0AARs/XlOXWYvEVYev703prxUY8XJ9iR7fl+Drw9NdFa0hXFRj1977XxPPtg8bl2ChZdfiIxxNvN5LjNuFafDVLi3vfcjrfW/LPzcf02fQzWlZVq9TkQg3CPY8XteXcvEtbEqdOPKlJcp9uz3iz7wPhetuWfm4/ps+g9bst/NR/TZ9Cq5rX6uXg+BM19L6l4o+6c7tlnfoWFfIel92sKeuP4p+Gq8Wj+vrblv5qP6bPoeabSZvLHYqdz1Va5lMX7Nae7d1vi+8m2CwTnVTqxaiscVn0Lj2EW2WuMKfwO+Tww2dvDtPlo9G8nmR+breMsjz7VpSnxjX0y/y/hLrPO69FKLa1imtV1rXej1OnbTLFGKVsoJJJQ81ZzVpw3LQtdKOtKmqdOLfKzaV+HR3+hW6P1UZudSSV2V7u7+71OnBznrrlnv38q3+pfXXLffS+Vb/Uz/MrT1cvK+Bc87s/WR8yOiBzvrplvvpfKt/qX10y337+Vb/UHM7R1cvK+B3PLP1kfMuJ0IOe9c8t9+/lW/1L65Zb79/Kt/qHmdo6uXlfAHPbP1kfMuJ0AOf9ccu9/L5Vv9SeuWXe/fyrPoDmlo6uXlfA7ntm6yPmXE6EHP8Arhl3v5fKt+g9cMu9+/lW/Q7mlo6uXgzue2brI+ZcToDg9uso5Mli4LmyaVyX4uiXjw/+n3fW/Lvfv5Vv0PyZptRl9mHtrU3a5xcVDzc1rJrdva0W/Rkiy07TRqqahK7bhs949xEttWyWijKDqRvzXxLBrLb3bmefpFCKkaRmOvBSoqQBWyFAAKc6jaCBPNG2DSQSAooNJFSBwjYRSoorYjYNIIIAgRUEaAI2EaQRUAVsI0gVCiNhBFKgCXgqCKBiXgqQSNJAFbCRQaQBLwioIqAI2EaIjSQBGyA0DrxTnCpH6Mdh3VdbU+Ndk4P/ABk1/o/gTU78TSPoBtIJA4RsGkEaFbEbBUEEAQI0kRGgCNhGkQ0gC3hGkEVCnm2EEEaQBQigoLxGEVIJGkgCNhIoNIAjCLoEUArYRUEbAI2EAiiiN3AHUeqdnb+4IvPaH1Fj/SLZ9B8fyj5M6cQsZBfZ36KzThG5Lp/8ktfBnIJHvGLw1d9c6rIKdc1pKL4NHmOf7E4nDylOhPEUcUo/8sF1Sj7XevghdG6RhKCpVHdJYK/Jrjsxz3mjttkkpOpBXp59nccqaSDTTaa0a4p7mvAqLllVeUqCCAI2Co0kACNhFQRtAEbIjSCKhRWwghoaQBAioIoLxAaSIkbSAI2RIoKAQG0iIoBWwVBG0ARsIBFFEbuB9nZXLvSMQpNfZUtSm+hvoXi/4GVbN4jENOSdNfTOS3tdi4v+DvMDg68PXGuuOkV8W+mTfSyttttjCLhB3zf2/JeaK0VUq1FVqq6mscf1dHdfm8nkuz9YAKE2V7AAOAcL5ROHw/g8+ANZov8Axome0l/fZUUAnlaym0AAUqCAAeZpFQABWVFKACM0ggAMQqNIAUQsSgAEZUbAOFYRoAUQ0jp9jP8Ak8f9gES2/wBiRYaI/wAymdwADMrI3sswADgH/9k=' />
        </div>

      </div>

    </Button>
  )
}

export default Home

const Button = styled.div`
background-color: rgb(23, 20, 32);
min-height: 70vh;
max-width: 100vw;
margin-top: -8px;
padding: 100px;
color:white;
.edit{
  border-radius: 20px;
}
img{
  max-width: 100px;
  max-height: 100px;
}
img:hover{
  scale: 1.3;
}
.logos{
  display: flex;
  gap: 10vw;
}
span{
  color: #25ce8f;
}
button{
  background-color: #25ce8f;
  border:none;
  border-radius:10px;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 25px;
  color: white;
  cursor: pointer;
}
button:hover{
  scale: 1.02; 
}
.hero,.sec2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  gap: 10vh;
}
.sec2{
  margin-top: 20vh;
}
.top{
  font-size: 60px;
  font-weight:1000;
}
`;