<template>
    <div class="list">
        <!-- 商品列表	        面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 按钮组, 带搜索框 -->
        <section class="list_btns">
            <el-button plain size="mini" icon="el-icon-plus" type="primary">新增</el-button>
            <el-button plain size="mini" icon="el-icon-check" type="success">全选</el-button>
            <el-button plain size="mini" icon="el-icon-close" type="danger">删除</el-button>

            <div class="list_btns_right">
                <!-- 搜索框 -->
                <el-input placeholder="请输入商品名称" prefix-icon="el-icon-search" label-width="200px" size="mini" v-model="searchvalue" @blur="getGoodsLook">
                </el-input>
            </div>
        </section>

        <!-- 大表格 -->
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="标题" width="400">
                <template slot-scope="scope">
                    <router-link :to="{ name:'goodsDetail' }">{{ scope.row.title }}</router-link>
                </template>
            </el-table-column>
            <el-table-column prop="categoryname" label="所属类别" width="90">
            </el-table-column>
            <el-table-column prop="stock_quantity" label="库存" width="90">
            </el-table-column>
            <el-table-column prop="market_price" label="市场价" width="90">
            </el-table-column>
            <el-table-column prop="sell_price" label="销售价" width="90">
            </el-table-column>
            <el-table-column prop="address" label="属性" width="120">
                 <template slot-scope="scope">里面是三个图标</template>
            </el-table-column>
            <el-table-column label="操作" show-overflow-tooltip>
                <template slot-scope="scope">
                        <router-link :to="{ name:'goodsDetail' }">修改</router-link>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="block">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[10, 20, 50, 100,200]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalcount">
        </el-pagination>
  </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        searchvalue:"",
        pageIndex:1,
        pageSize:10,
        totalcount:1,
        tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
      getGoodsLook(){
            this.getGoodsData();
        },
      //请求页面自定义方法
      getGoodsData(){
          this.$http.get(this.$api.gsList + '?pageIndex='+ this.pageIndex +'&pageSize='+ this.pageSize +'&searchvalue='+this.searchvalue).then((res)=>{
            //    console.log(res);
              if(res.data.status==0){
                  this.tableData3 = res.data.message;
                  this.totalcount=res.data.totalcount;
              }
          })
      },
        // 分页pageSize 每页几条 改变时会触发
        handleSizeChange(val) {
            this.pageSize=val;
            this.getGoodsData();
      },
      //currentPage当前页数 改变时会触发
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.pageIndex=val;
        this.getGoodsData();
      }

     },
    mounted () {
        this.getGoodsData();
    }
};
</script>

<style scoped lang="less">
.list {
  // 按钮组
  &_btns {
    margin-top: 20px;
    &_right {
      float: right;
      width: 200px;
    }
  }
}
</style>