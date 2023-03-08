<template>
    <div class="qianduan">
        <hr>

        <el-table
            :data="tableData.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column label="姓名" prop="username">
            </el-table-column>
            <el-table-column label="邮箱" prop="sex">
            </el-table-column>
            <el-table-column label="电话" prop="age">
            </el-table-column>
            <el-table-column label="角色" prop="major">
            </el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">
                    {{ scope.row.graduation ? "已经毕业" : "未毕业" }}
                </template>

            </el-table-column>
            <el-table-column label="操作" prop="intro">
            </el-table-column>
            <el-table-column align="right">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">毕业</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="[1, 2, 3, 4]" :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>

</template>

<script>
import { getStudentInfo, putStudentInfo, delStudentInfo } from "@/http"
export default {
    created() {
        this.getList()
        setTimeout(()=>{
            this.handleCurrentChange(1)
             this.handleSizeChange(5)
        },1000)
  
    },
    data() {
        return {
            tableData: [],
            arr:[],
            search: "",
            currentPage:1,
            total:10,
            pageSize:5
        }
    },

    methods: {
        handleEdit(index, row) {
            putStudentInfo(row._id)

            this.getList()
        },
        getList() {
            let params = {
                pagenum: this.currentPage,
                pagesize: this.pageSize,
            }
            getStudentInfo(params).then(res => {
                 console.log(res);
                this.tableData = res.data.data
  
                this.total = this.tableData.length
                this.arr = JSON.parse(JSON.stringify(this.tableData)) 
            })
        },
        handleDelete(index, row) {
            delStudentInfo(row._id).then(res => {
                this.getList()
            })

        },
        handleSizeChange(val) {
            this.pageSize = val
            let page = this.currentPage
            let size = this.pageSize 
            this.tableData=this.arr.slice((page-1)*size,page*size)
        },
        handleCurrentChange(val) {
            this.currentPage=val;
           

             let page = this.currentPage 
             let size = this.pageSize 
            this.tableData=this.arr.slice((page-1)*size,page*size)
        }
    }
}
</script>

<style>

</style>